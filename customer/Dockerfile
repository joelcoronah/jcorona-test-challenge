# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY . .

# Expose the microservice port
EXPOSE 3001

# Command to start the Customer Microservice
CMD ["npm", "run", "start"]
