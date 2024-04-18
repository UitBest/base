FROM php:8.2-fpm as app

# Werk pakketlijsten bij en installeer afhankelijkheden
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    curl \
    unzip \
    git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Installeer PHP-extensies
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Installeer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Installeer Node.js en npm voor front-end ontwikkeling
RUN curl -sL https://deb.nodesource.com/setup_21.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Stel de werkdmap in
WORKDIR /var/www

# Kopieer bestaande applicatie naar container
COPY . /var/www

# Maak opslag en cache mappen schrijfbaar
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

FROM app as serve

# Installeer afhankelijkheden van de applicatie
#RUN composer install

# Expose poort 8000
EXPOSE 8000

# Start de webserver
CMD composer i && php artisan serve --host=0.0.0.0 --port=8000

FROM app as dev

# Installeer afhankelijkheden van de applicatie
#RUN npm install

# Expose poort 83
EXPOSE 83

# Start commando voor ontwikkeling
CMD npm i && npm run dev

