FROM golang:1.21.5

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY ./src/go.mod ./
RUN go mod download

COPY ./src/*.go ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /ktCraft

EXPOSE 8080

# Run
CMD ["/ktCraft"]