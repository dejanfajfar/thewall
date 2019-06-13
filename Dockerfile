FROM node:alpine AS builder

WORKDIR /thewall/

COPY . .

RUN npm install
RUN npm run build

FROM nginx:alpine

LABEL maintainer="Dejan Fajfar <dejan@fajfar.com>"

WORKDIR /usr/share/nginx/html/

COPY --from=builder /thewall/public/ .

