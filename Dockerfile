# ---------- STAGE 1: build the React app ----------
FROM node:18-alpine AS build

WORKDIR /app

# Add PATH to use local node_modules binaries
ENV PATH /app/node_modules/.bin:$PATH

# Copy package files and install dependencies (use npm ci for deterministic installs)
COPY package*.json ./
RUN npm ci --silent

# Copy rest of the project
COPY . .

# If you use CRA environment vars, pass build-time args (optional)
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=${REACT_APP_API_URL}

# Build the app
RUN npm run build

# ---------- STAGE 2: serve with nginx ----------
FROM nginx:stable-alpine

# Remove default nginx static content
RUN rm -rf /usr/share/nginx/html/*

# Copy built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy a custom nginx config (optional but recommended for SPA routing)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Render maps container port automatically)
EXPOSE 80

# Run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
