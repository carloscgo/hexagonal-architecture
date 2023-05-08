# Hexagonal Architecture Project
This project uses **hexagonal architecture to structure** its code. Here's how to use the available scripts to get started:

## Installation
To install dependencies for both the **React app** and **server API**, run:

```
npm run install
```

This will execute the script "install": "npm i --prefix ./src/react-app && npm i --prefix ./src/server-api".


## Starting the React App
This command will start the React app in development mode. It runs the dev script inside the ./src/react-app folder.

```
npm run start:react
```

## Starting the Server
This command will start the **API server**. It runs the start script inside the ./src/server-api folder.

```
npm run start:api
```

## Building and Running Docker Images
This command will run a **Docker container using the docker-compose.yml** file located in the ./cicd folder. It also uses an environment variables file located in the root directory called .env.production, which contains configuration settings for the application.

```
npm run docker:run
```

This command will use **Docker Compose to start all containers** defined in the docker-compose.yml file in the background (detached mode). It runs the docker:run script followed by the command up -d.

```
npm run docker:up
```

This command will **build a Docker image** using the Dockerfile located in the ./cicd folder. Similar to docker:run, it also uses the .env.production environment variables file.
```
npm run docker:build
```

This command will **launch an interactive terminal** session within a running container. It runs the docker:run exec -ti -- command.
```
npm run docker:command
```
