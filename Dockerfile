FROM node:18-alpine3.14

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn install

COPY . .

RUN yarn build
