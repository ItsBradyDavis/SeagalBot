# syntax=docker/dockerfile:1
FROM node:16.14-alpine
WORKDIR /app
COPY . .
RUN yarn install
CMD ["yarn", "start"]
EXPOSE 3000
