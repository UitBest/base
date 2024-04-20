FROM php:8.2-fpm as setup

# Update package lists and install PHP and Node.js dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    unzip \
    git \
    && curl -sL https://deb.nodesource.com/setup_21.x | bash - \
    && apt-get install -y nodejs \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy Composer from the official Composer image
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Stel de werkdmap in
WORKDIR /var/www

COPY . /var/www

FROM setup as app

WORKDIR /var/www

FROM app as serve

# Expose poort 8000
EXPOSE 8000

WORKDIR /var/www

RUN composer install

# Start de webserver
CMD php artisan serve --host=0.0.0.0 --port=8000

FROM app as dev

# Expose poort 83
EXPOSE 83

WORKDIR /var/www

RUN npm install

# Start commando voor ontwikkeling
CMD npm run dev
