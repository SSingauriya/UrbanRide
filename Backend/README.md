# User Registration API Documentation

This is the backend API documentation for the User Registration service.

## Register User
Endpoint for creating a new user account.

### HTTP Method
```
POST
```

### Endpoint
```
POST /users/register
```

### Request Body
```json
{
  "name": "string",
  "email": "string",
  "password": "string",
  "phone": "string"
}
```

#### Field Requirements
- `name`: Full name of the user (2-50 characters)
- `email`: Valid email address
- `password`: Minimum 8 characters, must contain at least one uppercase letter, one lowercase letter, and one number
- `phone`: Valid phone number

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 201        | User successfully created |
| 400        | Invalid request body or validation error |
| 409        | Email already exists |
| 500        | Internal server error |

### Example Request
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "Password123",
  "phone": "+1234567890"
}
```

### Example Success Response
```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "userId": "uuid",
    "name": "John Doe",
    "email": "john.doe@example.com"
  }
}
```

### Example Error Response
```json
{
  "status": "error",
  "message": "Email already exists"
}
```

## Register Captain
Endpoint for creating a new captain account.

### HTTP Method
```
POST
```

### Endpoint
```
POST /captains/register
```

### Request Body
```json
{
  "fullname": {
    "firstname": "string",
    "lastname": "string"
  },
  "email": "string",
  "password": "string",
  "vehicle": {
    "color": "string",
    "plate": "string",
    "capacity": "number",
    "vehicleType": "string"
  }
}
```

#### Field Requirements
- `captain` (object):
  - `fullname` (object).
    - `firstname` (string): User's first name
    - `lastname` (string): User's last name
  - `email` (string): User's email address
  - `password` (string): User's password
  - `vehicle` (object):
    - `color` (string): vehicle color
    - `plate` (string): Plate number of the vehicle
    - `capacity` (number): Capacity of the vehicle
    - `vehicleType` (string): Type of the vehicle

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 201        | Captain successfully created |
| 400        | Invalid request body or validation error |
| 500        | Internal server error |

### Example Request
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "Password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Success Response
```json
{
  "status": "success",
  "message": "Captain registered successfully",
  "data": {
    "captainId": "uuid",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Example Error Response
```json
{
  "status": "error",
  "message": "Invalid request body or validation error"
}
```

## Login User
Endpoint for logging in a user.

### HTTP Method
```
POST
```

### Endpoint
```
POST /users/login
```

### Request Body
```json
{
  "email": "string",
  "password": "string"
}
```

#### Field Requirements
- `email`: Valid email address
- `password`: Minimum 6 characters

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200        | User successfully logged in |
| 400        | Invalid request body or validation error |
| 401        | Invalid email or password |
| 500        | Internal server error |

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "Password123"
}
```

### Example Success Response
```json
{
  "token": "jwt-token",
  "user": {
    "id": "uuid",
    "email": "john.doe@example.com",
    "firstname": "John",
    "lastname": "Doe"
  }
}
```

### Example Error Response
```json
{
  "errors": [
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

## Get User Profile
Endpoint for retrieving the logged-in user's profile.

### HTTP Method
```
GET
```

### Endpoint
```
GET /users/profile
```

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200        | User profile retrieved successfully |
| 401        | Unauthorized access |
| 500        | Internal server error |

### Example Success Response
```json
{
  "id": "uuid",
  "email": "john.doe@example.com",
  "firstname": "John",
  "lastname": "Doe"
}
```

### Example Error Response
```json
{
  "message": "Unauthorized access"
}
```

## Logout User
Endpoint for logging out the user.

### Description

Logout the current user and blacklist the token porvided in cookie or headers.  

### HTTP Method
```
GET
```

### Authentication 

Requires a valid JWT token in the Authorization header or cookie:

### Endpoint
```
GET /users/logout
```

### Response Status Codes

| Status Code | Description |
|------------|-------------|
| 200        | User successfully logged out |
| 500        | Internal server error |

### Example Success Response
```json
{
  "message": "Logged out"
}
```

### Example Error Response
```json
{
  "message": "Internal server error"
}
```

