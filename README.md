# Backend User Management System (Express + MongoDB Atlas)
# Overview

This project is a simple Backend User Management System built using Node.js, Express.js, and MongoDB Atlas.
It allows performing basic CRUD (Create, Read, Update, Delete) operations on user data such as name, email, and age.
All API endpoints are tested using Thunder Client in VS Code.

# Tech Stack

Node.js – JavaScript runtime for building backend services

Express.js – Framework for creating RESTful APIs

MongoDB Atlas – Cloud-based NoSQL database

Mongoose – ODM for interacting with MongoDB

CORS & JSON Middleware – For API data handling and cross-origin support

# Folder Structure
Backend-User-Management/
│
├── server.js         # Main backend file
├── package.json      # Project dependencies
└── README.md         # Project documentation

# How to Run Locally
1️ Clone the Repository
git clone https://github.com/<your-username>/Backend-User-Management.git
cd Backend-User-Management

2 Install Dependencies
npm install

3 Start the Server
node server.js


You’ll see:

Mango DB Connected
Server is running
#  API Endpoints

| Operation                 | Method | Endpoint      | Request Body                                               | Description                  |
| ------------------------- | ------ | ------------- | ---------------------------------------------------------- | ---------------------------- |
| **Create User**           | POST   | `/users`      | `{ "name": "John", "email": "john@gmail.com", "age": 25 }` | Adds a new user              |
| **Get All Users**         | GET    | `/users`      | —                                                          | Retrieves all users          |
| **Update User (by ID)**   | PUT    | `/user/:id`   | `{ "name": "Updated Name" }`                               | Updates user name            |
| **Delete User (by Name)** | DELETE | `/user/:name` | —                                                          | Deletes user by name         |
| **Welcome Message**       | GET    | `/`           | —                                                          | Returns “Hello, Sai” message |

# Testing

# Use Thunder Client (VS Code extension) or Postman to test the routes.

# Example (POST request to create user):

{
  "name": "Panasa Sai",
  "email": "sai@example.com",
  "age": 23
}

 # Features

-- Simple CRUD operations

-- Cloud MongoDB connection (Atlas)

-- RESTful API architecture

-- Error handling for failed operations

-- Easy testing with Thunder Client

# Author 
Panasa Satya Sai
Mail :  panasasatyasai@gmail.com 
Github Link :  [[[Your GitHub Profile Link](https://github.com/panasasatyassai/Backend-User-Management-System-Express-MongoDB-Atlas-)]](https://github.com/panasasatyassai/Backend-User-Management-System-Express-MongoDB-Atlas-)
 




Server runs at → http://localhost:3000
