FROM node:18-alpine

WORKDIR /backend

COPY backend/package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

CMD ["npm", "run", "start:dev"]