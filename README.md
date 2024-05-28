# Project Title

**TaskType**

TaskType  is a streamlined todo application designed to help users manage their tasks efficiently. It features a user-friendly interface that includes a task counter, which keeps track of the number of tasks you have at any given time. Each task can be categorized by status—such as pending, in progress, or completed—and by priority levels, including low, medium, and high. This categorization helps users prioritize their workload and stay organized, ensuring that important tasks are addressed promptly. With **TaskType**, managing daily responsibilities becomes simpler and more effective, making it an ideal tool for anyone looking to enhance their productivity.

This is a TypeScript-based web application built with React, Node.js, TypeORM, and MySQL. It leverages React Context for state management and React Query for efficient server state management in React components.

## Description

This project is structured into two main directories: `frontend` and `backend`. The `frontend` directory contains all the React components and context setup, while the `backend` directory houses the Node.js application configured with TypeORM to interact with MySQL database.

## Features

- **React**: Frontend framework for building user interfaces
- **Node.js**: Runtime environment for the backend server
- **TypeORM**: ORM tool for Node.js to manage database interactions
- **MySQL**: Database for storing application data
- **React Context**: State management for managing global state without props drilling
- **React Query**: Library for fetching, caching, and updating data in React applications

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm or yarn
- MySQL

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

#### Backend Setup

1. Navigate to the `tasktype-back` folder:
    ```bash
    cd tasktype-back
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up your database configurations in a `.env` file or directly in your ORM configuration file.
4. Run the migrations:
    ```bash
    npm run typeorm migration:run
    ```
5. Start the backend server:
    ```bash
    npm start
    ```

#### Frontend Setup

1. Navigate to the `tasktype` folder:
    ```bash
    cd tasktype
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```
   This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<!-- ## Usage

Describe how to use your application with some practical examples.
## Acknowledgments

- Mention any inspirations, code snippets, etc. -->
