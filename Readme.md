# Test Node.js application for Halo Lab

## Requirements

- Docker (ver. 4.3.1 or higher)

## Installation

1. Make sure you have Docker installed and running
2. Clone this repository with `git clone https://github.com/Mehoff/halo-lab-test.git `
3. Move to project directory, create .env file and fill it with following data:

```
APP_PORT=3000
POSTGRES_PORT=5423
REDIS_PORT=6379
REDIS_HOST=redis
REDIS_CACHE_TTL=30
INMEMORY_CACHE_TTL=15
```

4. Run next commands:

```
docker build -t halo-lab-test .
docker-compose up
```

Server should start at `http://localhost:3000/` after Postgres and Redis initialization.

## Endpoints

- `GET /categories/:name`
- `GET /films/:title`

## Output

Every request is being logged into console and has information about it:

- Time spent to process request
- Source of returned data

## Request examples

- `GET /films/parasites`
- `GET /films/goldfinger`
- `GET /films/thunderball`
- `GET /films/moonraker`
- `GET /categories/horror`
- `GET /categories/action`
