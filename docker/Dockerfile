FROM golang:1.22.0

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY src/go.mod ./

RUN go mod tidy

RUN go mod download

# Copy app files
COPY src ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /ktCraft

EXPOSE 8080

# Run
CMD ["/ktCraft"]