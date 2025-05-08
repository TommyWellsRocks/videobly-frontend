# Use official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy the package files first for caching purposes
COPY pnpm-lock.yaml package.json ./

# Install dependencies
RUN pnpm install

# Copy the rest of the app
COPY . .

# Build the app
RUN pnpm run build

# Expose port and run the app
EXPOSE 3000
CMD ["pnpm", "start"]
