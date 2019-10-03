FROM node:alpine AS node_modules

WORKDIR /tmp
ADD ./package-lock.json .
ADD ./package.json .
RUN npm install


# build python
FROM node:10.16-alpine AS service
# RUN npm install
WORKDIR /app
COPY . .

RUN npm install -g nodemon
EXPOSE 3000

ADD https://raw.githubusercontent.com/mrako/wait-for/master/wait-for ./
RUN chmod +x ./wait-for

COPY --from=node_modules /tmp/node_modules ./node_modules/