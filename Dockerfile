FROM node:18-alpine AS base

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json ./

RUN NODE_ENV=development npm i

COPY next.config.js ./next.config.js

CMD ["npm", "run", "dev"]
