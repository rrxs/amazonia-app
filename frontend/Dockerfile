FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

ARG ENV
RUN if [ "$ENV" = "prod" ] ; then npm run build ; else npm run build:dev ; fi

FROM nginx:alpine

COPY --from=build /app/dist/frontend/ /usr/share/nginx/html

EXPOSE 80