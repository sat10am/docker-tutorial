FROM node:10.16 AS service

WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000

CMD ["npm", "start"]
