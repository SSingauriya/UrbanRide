# User Registration API Documentation

## Register User
Endpoint for creating a new user account.

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
