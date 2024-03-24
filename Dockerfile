FROM node:20 AS build-stage

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

ARG VITE_MAPS_API_KEY

RUN yarn build

FROM nginxinc/nginx-unprivileged:1.25 AS build-release-stage

WORKDIR /

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]