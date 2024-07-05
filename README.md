## Description

This project is a REST API developed using Node.js and the Express framework. It includes Sequelize for managing a relational database, and is set up in a local development environment using WAMP and PhpMyAdmin for MySQL database management. Insomnia was used for testing and debugging the API endpoints. The entire project is developed in JavaScript.

Note : This project was developed using the Udemy course by : Simon Dieny

## Features

- **Server Development**: Built with Node.js.
- **REST API**: CRUD operations implemented using Express.
- **Database Integration**: Connected to a SQL database using Sequelize ORM.
- **User Password Encryption**: Implemented using Bcrypt.
- **Error Handling**: Manages errors with codes 404, 401, and 500.
- **JWT Token**: Used for secure communications.

## Requirements

- Node.js
- NPM
- WAMP (or any local development environment with PhpMyAdmin and MySQL)
- Insomnia (or any API testing tool)

## Installation

1. **Clone the repository:**
    
    ```bash
    
    git clone https://github.com/yourusername/Yllustran/Node-Api.git
    cd Node-Api

    
    ```
    
2. **Install dependencies:**
    
    ```bash
    
    npm install [dependencies]
    
    ```
    
3. **Setup the database:**
    - Ensure WAMP is running.
    - Create a new database using PhpMyAdmin.
    - Configure the Sequelize connection in the project.

## Usage

1. **Run the server:**
    
    ```bash
    
    npm start
    
    ```
    
2. **API Endpoints:**
    - **Create**: `POST /api/pokemo,s`
    - **Read**: `GET /api/pokemons`
    - **Update**: `PUT /api/pokemons/:id`
    - **Delete**: `DELETE /api/pokemons/:id`
3. **Testing Endpoints**
    
    Use Insomnia or any API testing tool to test the endpoints.
    

## Development

- **File Structure:**
    
    ```
    
  ├── node_modules
  ├── src
  ├── models
  ├── routes
  ├── middlewares
  ├── app.js
  ├── favicon.ico
  ├── package.json
  └── package-lock.json

    ```
    
- **Commands:**
    - `npm start`: Run the server

## Security

- **Password Encryption**: User passwords are encrypted using Bcrypt before saving to the database.
- **JWT**: JSON Web Tokens are used to secure API endpoints.

## Error Handling

- **404**: Resource not found.
- **401**: Unauthorized access.
- **500**: Internal server error.
