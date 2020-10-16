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
      "id": "Number",
      "name": "String",
      "cuisine": "String",
      "address": "String",
    }
// photos
    {
      "photo_id": "Number",
      "restaurant_id": "Number",
      "category_id": "Number",
      "description": "String",
      "date": "String",
      "url_path": "String",
      "user_id": "Number",
    }
// categories
    {
      "id": "Number",
      "name": "String",
    }
// users
    {
      "id": "Number",
      "first_name": "String",
      "last_name": "String",
      "user_avatar": "String",
    }
```

## Cassandra Schema
```json
// restaurants
    {
      "id": "uuid",
      "rest_name": "text",
      "cuisine": "text",
      "address": "text",
      "PRIMARY KEY (id)"
    }
// photos by restaurant
    {
      "photo_id": "uuid",
      "restaurant_id": "int",
      "rest_name": "text",
      "category_name": "text",
      "description": "text",
      "date": "timeuuid",
      "url_path": "text",
      "user_avatar": "text",
      "first_name": "text",
      "last_name": "text",
      "PRIMARY KEY (photo_id)"
    }
// photos by category
    {
      "photo_id": "uuid",
      "restaurant_id" "int",
      "rest_name": "text",
      "category_id": "int",
      "category_name": "text",
      "description": "text",
      "date": "timeuuid",
      "url_path": "text",
      "user_avatar": "text",
      "first_name": "text",
      "last_name": "text",
      "PRIMARY KEY (photo_id)"
    }
```

## Server API

### Get list of restaurants
  * GET `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON

```json
// restaurants
    {
      "id": "Number",
      "name": "String",
      "cuisine": "String",
      "address": "String",
    }
```

### Get all photos for a restaurant
  * GET `/api/restaurants/:id/photos`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON
<!-- needs all photos -->
```json
// photos
    [
      {
        "photo_id": "Number",
        "restaurant_id": "Number",
        "category_id": "Number",
        "description": "String",
        "date": "String",
        "url_path": "String",
        "user_id": "Number",
      },
      {
        "photo_id": "Number",
        "restaurant_id": "Number",
        "category_id": "Number",
        "description": "String",
        "date": "String",
        "url_path": "String",
        "user_id": "Number",
      },
    // ...x20
    ]
```

### Get all photos for restaurant by category info
  * GET `/api/restaurants/:id/category/:categoryId`

**Path Parameters:**
  * `retaurant_id` restaurant id
  * `category_id` category id

**Success Status Code:** `200`

**Returns:** JSON
<!-- needs all photos -->
```json
// photos
    [
      {
        "photo_id": "Number",
        "restaurant_id": "Number",
        "category_id": "Number",
        "description": "String",
        "date": "String",
        "url_path": "String",
        "user_id": "Number",
      },
      {
        "photo_id": "Number",
        "restaurant_id": "Number",
        "category_id": "Number",
        "description": "String",
        "date": "String",
        "url_path": "String",
        "user_id": "Number",
      },
    // ...x20
    ]
```


### Add restaurant
  * POST `/api/restaurants`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
// restaurants
    {
      "id": "Number",
      "name": "String",
      "cuisine": "String",
      "address": "String",
    }
```

### Add image to restaurant
  * POST `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**

  * `restaurant_id` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
// photos
    {
      // "photo_id": "Number",
      "restaurant_id": "Number",
      "category_id": "Number",
      "description": "String",
      "date": "String",
      "url_path": "String",
      "user_id": "Number",
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
      "id": "Number",
      "name": "String",
      "cuisine": "String",
      "address": "String",
    }
```

### Delete restaurant
  * DELETE `/api/restaurants/:id`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `204`

### Delete photo
  * DELETE `/api/restaurants/:id/photos/:photoId`

**Path Parameters:**
  * `photo_id` photo id
  * `restaurant_id` restaurant id

**Success Status Code:** `204`

## Requirements
An nvmrc file is included if using nvm.

Node 6.13.0
etc

## Installing Dependencies
From within the root directory:

npm install -g webpack
npm install
