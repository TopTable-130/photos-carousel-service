# Project Name

System Design Capstone: TopTable

## Related Projects

  - Popular-Dishes: Jorgen https://github.com/TopTable-130/popular-dishes
  - Bookings Service: Daniel https://github.com/TopTable-130/Calendar
  - Reviews Service: Ryan https://github.com/TopTable-130/Reviews

## Table of Contents

1. PostreSQL Schema
2. Cassandra Schema
3. API Endpoints/Usage

## PostreSQL Schema
```json
// restaurants
    {
      "id": Number,
      "name": String,
    }
// photos
    {
      "photo_id": Number,
      "restaurant_id": Number (foreign key),
      "category_id": Number (foreign key),
      "description": String,
      "date": String,
      "url_path": String,
      "user_id": Number (foreign key),
    }
```

## Cassandra Schema
```json
// photos
    {
      "id": uuid,
      "photo_id": uuid,
      "restaurant_id": int,
      "rest_name": text,
      "category_id": int,
      "category_name": text,
      "description": text,
      "date": text,
      "url_path": text,
      "user_avatar_path": text,
      "user_id": int,
      "first_name": text,
      "last_name": text,
      PRIMARY KEY ((id), photo_id)
    }
```

## Server API

### Get restaurant info
  * GET `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
// restaurants
  {
    "id": Number,
    "name": String,
  }
```

### Get restaurant info
  * GET `/api/photos/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
// photos
    {
      "photo_id": Number,
      "restaurant_id": Number (foreign key),
      "category_id": Number (foreign key),
      "description": String,
      "date": String,
      "url_path": String,
      "user_id": Number (foreign key),
    }
```

### Add restaurant
  * POST `/api/restaurants`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
// restaurants
    {
      "id": Number,
      "name": String,
    }
```

### Update restaurant info
  * PATCH `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
// restaurants
    {
      "id": Number,
      "name": String,
    }
```

### Delete restaurant
  * DELETE `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

### Delete photo
  * DELETE `/api/photos/:id`

**Path Parameters:**
  * `photo_id` photo id
  * `restaurant_id` restaurant id

**Success Status Code:** `204`

### Add image to restaurant
  * POST `/api/photos/:id/images`

**Path Parameters:**

  * `restaurant_id` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
// photos
    {
      "photo_id": Number,
      "restaurant_id": Number (foreign key),
      "category_id": Number (foreign key),
      "description": String,
      "date": String,
      "url_path": String,
      "user_id": Number (foreign key),
    }
```

## Requirements
An nvmrc file is included if using nvm.

Node 6.13.0
etc

## Installing Dependencies
From within the root directory:

npm install -g webpack
npm install
