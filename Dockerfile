FROM node:12.18.1

RUN mkdir /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm start