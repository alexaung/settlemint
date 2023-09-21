# Settlemint - Nest.js Backend Application

This is the backend of the Settlemint application built with Nest.js. It uses the Google Books API to fetch book data based on search queries and serves it to the frontend through GraphQL using Apollo Server.

## Requirements:

- Docker
- Kubernetes
- Node.js

## Setup:

1. **Clone the Repository**:

   ```bash
   git clone [https://github.com/alexaung/settlemint.git]
   cd settlemint/backend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Docker Build & Push:**:

    ```bash
    docker build -t alexaung/nestjs-backend:latest ./
    docker push alexaung/nestjs-backend:latest
    ```

4. **Deploy to Kubernetes**: 

    ```bash
    kubectl apply -f backend-deployment.yaml
    kubectl apply -f backend-service.yaml
    ```

## Features:

- GraphQL endpoints for fetching book data.
- Proper error handling and validation.
- Pagination support.