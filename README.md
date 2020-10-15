# Project Name

System Design Capstone: TopTable

## Related Projects

  - Popular-Dishes: Jorgen https://github.com/TopTable-130/popular-dishes-proxy
  - Bookings Service: Daniel https://github.com/TopTable-130/Calendar-proxy
  - Reviews Service: Ryan

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
      "category": String,
      "description": String,
      "date": String,
      "url_path": String,
      "user_avatar_path": String,
      "user_id": Number,
    }
```

## Cassandra Schema
```json
// photos
    {
      "restaurant_id": int primary key,
      "photo_id": int,
      "category": text,
      "description": text,
      "date": text,
      "url_path": text,
      "user_avatar_path": text,
      "user_id": int,
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
      "category": String,
      "description": String,
      "date": String,
      "url_path": String,
      "user_avatar_path": String,
      "user_id": Number,
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

  * `retaurant_id` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
// photos
    {
      "photo_id": Number,
      "restaurant_id": Number (foreign key),
      "category": String,
      "description": String,
      "date": String,
      "url_path": String,
      "user_avatar_path": String,
      "user_id": Number,
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
