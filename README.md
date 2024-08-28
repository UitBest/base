# Dus jij wilt een head start?
- Zorg dat je een verstand hebt
- Zorg dat je motivatie hebt
- Zorg dat je een computer hebt
- Zorg dat je een IDE hebt
- Zorg dat je een internetverbinding hebt
- Zorg dat je een GitHub account hebt
- Zorg dat in de github company zit

# Hier is een lijst met dingen die je moet doen:
## Clone repo en verwijder link
- ```mkdir newApp && cd newApp && git clone "https://github.com/UitBest/base.git" . && rm -rf .git && rm -rf README.md && cp .env.example .env && npm install && composer install && php artisan key:generate && git init && git add . && git commit -m "init" && git branch -M master```

Pro tip: verander na dit command de laravel app name in de .env naar de gewenste app name en vergeet niet op in /resources/views/app.blade.php de title te veranderen.

## dev environment
- ```npm run dev```
- ```php artisan serve```

# Laatste stap

De views met hun routes kun je in views/templates vinden. Copy paste de subfolders van de gekozen template in views en klaar is kees.

Mooi man. Success!
