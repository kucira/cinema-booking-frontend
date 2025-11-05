# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build


# Runtime stage
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

USER 1001

ENV NODE_ENV production
EXPOSE 4321

CMD ["node", "dist/src/main.js"]