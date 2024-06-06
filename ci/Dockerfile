FROM node:20-alpine AS base

WORKDIR /apps

COPY . .

RUN rm -rf node_modules
RUN npm i

CMD [ "npm", "start"]
EXPOSE 3000