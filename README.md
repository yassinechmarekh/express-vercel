# Express Vercel Starter

This project is a boilerplate for deploying an Express application with MongoDB (Mongoose) to Vercel Serverless Functions.

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript.
- **Mongoose**: Elegant mongodb object modeling for node.js.
- **Vercel Deployment**: Ready-to-deploy configuration for Vercel.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)
- Vercel account (for deployment)

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd express-vercel
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

## Configuration

1.  Create a `.env` file in the root directory based on `.env.example`:

    ```bash
    cp .env.example .env
    ```

2.  Update the `.env` file with your MongoDB connection string:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000
    ```

## Running Locally

To run the application locally in development mode with hot-reloading:

```bash
npm run dev
```

The server will start at `http://localhost:5000`.

To build and start the production version:

```bash
npm run build
npm start
```

## Deployment to Vercel

1.  Install the Vercel CLI globally:

    ```bash
    npm i -g vercel
    ```

2.  Login to Vercel:

    ```bash
    vercel login
    ```

3.  Deploy the project:

    ```bash
    vercel
    ```

    Follow the prompts to link the project to your Vercel account.

4.  **Important**: Don't forget to add your environment variables (`MONGODB_URI`) in the Vercel project settings dashboard.

## API Endpoints

### Posts

-   **GET** `/api/posts`: Fetch all posts.
-   **POST** `/api/post/create`: Create a new post.
    -   Body: `{ "title": "String", "content": "String", "author": "String" }`

## Project Structure

-   `src/app.ts`: Express application setup.
-   `src/db.ts`: Database connection logic.
-   `src/server.ts`: Entry point for local development.
-   `src/vercel.ts`: Entry point for Vercel deployment.
-   `vercel.json`: Vercel configuration file.
