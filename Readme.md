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
REDIS_CACHE_TTL=15
IMEMORY_CACHE_TTL=10
```

4. Run next command:

```
docker-compose up
```

Server should start on `http://localhost:3000/` after Postgres and Redis initialization.

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
- `GET /categories/horror`
- `GET /categories/action`
