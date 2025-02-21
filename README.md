# Todo App Backend

This is the backend for a Todo App that provides user authentication and CRUD operations for managing todos.

## Features

- **User Authentication**: Login & Signup functionality
- **Todo Management**: 
  - Add a new todo
  - Update an existing todo
  - Edit an existing todo (Only on Postman (API Testing))

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/todo-backend.git
   cd todo-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   ```

4. Start the server:
   ```sh
   npm run server
   ```

## API Endpoints

### Authentication
- **POST** `/user/reg` - Register a new user
- **POST** `/user/login` - Authenticate user and return a token

### Todos
- **GET** `/todo/all` - Get all todos
- **POST** `/todo/add` - Add a new todo
- **PUT** `/todo/:id` - Update an existing todo
- **DELETE** `/todo/delete/:id` - Delete a todo
