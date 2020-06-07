FROM node:alpine

WORKDIR /eic-helper

COPY package*.json ./
COPY main.js .

RUN npm install

ENTRYPOINT [ "node", "main.js"]
