FROM node as builder
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

COPY .env .

EXPOSE 3000
CMD ["node", "dist/server.js"]