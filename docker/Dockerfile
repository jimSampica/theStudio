FROM node:20.14-alpine

WORKDIR /app

COPY src .

RUN npm ci

# Disable telemetry at run time
ENV NEXT_TELEMETRY_DISABLED 1

# Build Next.js
RUN npm run build

# Start Next.js
CMD npm run start