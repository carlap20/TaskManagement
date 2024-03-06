# TASK MANAGEMENT

## Project Description
We will develop a RESTful API using Node.js and Express.js to manage tasks. The API will allow users to create, read, update, and delete tasks. Additionally, we will implement JWT (JSON Web Tokens) based authentication to secure the API endpoints and ensure the security of user data.

## Main Features
**User Registration:** Users can register by providing a username and password.
**Login:** Users can log in using their registration credentials.
**Task Management:** Authenticated users can create, read, update, and delete tasks.
**Route Protection:** API routes will be protected using JWT authentication, meaning only authenticated users can access them.

## Technologies Used
**Node.js:** Server-side JavaScript runtime environment.
**Express.js:** Web framework for Node.js that simplifies the creation of RESTful APIs.
**JWT (JSON Web Tokens):** Standard method for token-based authentication.
**MongoDB:** NoSQL database for storing user and task data.

## Project Structure
❯ tree public -L 1
public
├── server.js: Main file that initializes the Express server and defines API routes.
├── controllers/: Folder containing controllers for different API routes (e.g., userController.js for user registration and login, taskController.js for task management).
├── models/: Folder containing application data models (e.g., userModel.js and taskModel.js to define user and task schemas).
├── middlewares/: Folder containing JWT authentication middlewares.
└── routes/: Folder containing API route definitions.