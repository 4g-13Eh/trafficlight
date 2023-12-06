#!/bin/bash

# Build the Docker image
docker build -t trafficlight-app .

# Run the Docker container, mapping port 3000
docker run -p 3000:3000 -d --name trafficlight-container trafficlight-app

# Wait for the container to start (you might need to adjust the sleep time)
sleep 5

# Run tests inside the Docker container
docker exec -it trafficlight-container npm test

# Cleanup: stop and remove the container
docker stop trafficlight-container
docker rm trafficlight-container
