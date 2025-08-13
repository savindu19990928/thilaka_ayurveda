# Step 1: Build the app
FROM node:22.14.0 AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy app source
COPY . .

# Build the app
RUN npm run build

# Step 2: Run the app
FROM node:22.14.0

WORKDIR /app

# Copy build from previous stage
COPY --from=builder /app ./

# Install production dependencies
RUN npm install --only=production

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]