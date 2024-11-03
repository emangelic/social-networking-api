# Social Network API

This Social Network API is a backend application built with **Node.js**, **Express.js**, and **MongoDB**. It provides RESTful API endpoints that allow users to share thoughts, react to friends' thoughts, and manage a list of friends. This project utilizes **Mongoose** for data modeling and provides endpoints for creating, updating, and deleting users, thoughts, and reactions.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Description

This project was created to showcase the use of MongoDB, Express.js, and Mongoose in building a backend API for a social network. The API allows users to:
- Create and delete accounts,
- Post thoughts,
- React to others’ thoughts,
- Manage their friend list.

This project emphasizes CRUD operations, data validation, and relationships between data using MongoDB and Mongoose.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas for cloud)

### Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/emangelic/social-network-api.git
   cd social-network-api

2. Install Dependencies
    npm install

3. Set Up Environment Variables

Create a .env file in the root of the project.
Add your MongoDB URI (local or Atlas connection string) to the .env file: MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB

4. Start the server
    npm start or use npx nodemon server.js

## Usage
This API is meant to be used as a backend service. You can test the endpoints using Insomnia, Postman, or another API client. See the API Endpoints section for details on available routes.

API Endpoints
User Routes
GET /api/users - Get all users.
POST /api/users - Create a new user.
GET /api/users/:userId - Get a single user by ID.
PUT /api/users/:userId - Update a user by ID.
DELETE /api/users/:userId - Delete a user by ID.
POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list.
DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list.
Thought Routes
GET /api/thoughts - Get all thoughts.
POST /api/thoughts - Create a new thought.
GET /api/thoughts/:thoughtId - Get a single thought by ID.
PUT /api/thoughts/:thoughtId - Update a thought by ID.
DELETE /api/thoughts/:thoughtId - Delete a thought by ID.
POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought.
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought.
Technologies Used
Node.js: JavaScript runtime environment
Express.js: Framework for building web applications and APIs
MongoDB: NoSQL database for storing data
Mongoose: ODM (Object Data Modeling) library for MongoDB
dotenv: For managing environment variables
Testing
Use Insomnia or Postman to test each route. Make sure the server is running, then:

User Routes: Test routes like creating a user, getting all users, and managing the friend list.
Thought Routes: Test creating thoughts, fetching all thoughts, and adding/removing reactions.
Example requests and expected responses for each endpoint can be helpful during testing, especially for debugging any issues.

## Contributing
We welcome contributions! Here’s how you can help:

Fork the repository.
Create a new branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.
Please ensure all contributions follow the code of conduct and maintain code quality standards.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Future Development
This API provides a solid foundation for creating and managing social network data and can be extended with additional features like user authentication, enhanced validation, and more complex relationships between users and thoughts.