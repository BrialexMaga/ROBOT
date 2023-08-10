FROM node:18.17.0-slim

RUN apt-get update && apt-get install -y python3 python3-pip && apt-get clean

WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install

EXPOSE 3000

CMD npm start