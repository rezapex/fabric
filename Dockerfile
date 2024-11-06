# Use official golang image as builder
FROM golang:1.22.5-alpine AS builder

# Set working directory
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download dependencies
RUN go mod download

# Copy source code
COPY . .

# Build the application
RUN CGO_ENABLED=0 GOOS=linux go build -o fabric

# Use scratch as final base image
FROM alpine:latest

# Copy the binary from builder
COPY --from=builder /app/fabric /fabric

# Copy patterns directory
COPY patterns /patterns

# Ensure clean config directory and copy ENV file
RUN rm -rf /root/.config/fabric && \
    mkdir -p /root/.config/fabric
COPY ENV /root/.config/fabric/.env

# Copy frontend directory
COPY frontend /frontend

# Add debug commands
RUN ls -la /root/.config/fabric/

# Expose port 8080
EXPOSE 8080

# Serve the frontend using a web server
RUN apk add --no-cache nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /run/nginx
CMD ["nginx", "-g", "daemon off;"]
