# Settlemint - Next.js Frontend Application

This is the frontend of the Settlemint application built with Next.js and Apollo Client to display books from the Google Books API.

## Requirements:

- Docker
- Kubernetes
- Node.js

## Setup:

1. **Clone the Repository**:

   ```bash
   git clone [repository-url]
   cd settlemint/frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Docker Build & Push:**:

    ```bash
    docker build -t alexaung/nextjs-frontend:latest ./
    docker push alexaung/nextjs-frontend:latest
    ```

4. **Deploy to Kubernetes**: 

    ```bash
    kubectl apply -f frontend-deployment.yaml
    kubectl apply -f frontend-service.yaml
    ```

## Features:

- Search books based on title, author, keyword, etc.
- Display search results in a user-friendly manner.
- Basic pagination.
- Responsive design.