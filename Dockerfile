FROM node
WORKDIR /usr/app
COPY package*.json ./

RUN npm install
COPY . ./

COPY .env .

EXPOSE 3000
CMD ["npm", "run", "development"]