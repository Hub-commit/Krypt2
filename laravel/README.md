# Laravel Backend (scaffold)

This folder contains instructions and helper files to set up a Laravel backend to replace the current Node/Express API.

Two recommended setup options:

1) Local with Composer (recommended if you have PHP + Composer installed)

```bash
# from repository root
cd laravel
# create a new Laravel project (will create `laravel-app` folder)
composer create-project laravel/laravel laravel-app
cd laravel-app
cp .env.example .env
php artisan key:generate
# update .env DB_* values to match your database
php artisan migrate
php artisan serve --host=0.0.0.0 --port=8000
```

2) Docker (works without installing PHP/Composer locally)

```bash
# from repository root
cd laravel
docker-compose up -d --build
# use the composer container to create project inside the container volume
docker-compose run --rm composer create-project laravel/laravel laravel-app
docker-compose exec app bash -c "cd laravel-app && cp .env.example .env && php artisan key:generate && php artisan migrate"
```

Notes and next steps (after Laravel is running):
- Configure `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` in `laravel-app/.env`.
- Implement API routes to match your existing Node endpoints (e.g. `/api/auth`, `/api/mentees`, `/api/mentors`, `/api/ai`, `/api/messaging`, `/api/jobs`, `/api/goals`, `/api/admin`).
- Use Laravel Sanctum or JWT for authentication; migrate the `User` model and fields from `models/User.js`.
- Update the React `client` `vite.config.js` proxy or `client/src/api.js` base URL to point to the Laravel API (default `http://localhost:8000`).

If you want, I can scaffold Laravel controllers, models and routes to mirror the existing Node API once you confirm the DB choice (MySQL / Postgres) and whether you want Sanctum or JWT for auth.
