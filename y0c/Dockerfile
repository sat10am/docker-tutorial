# build packages
FROM node:10.16-alpine AS node_modules

WORKDIR /tmp
RUN apk add --no-cache --update krb5-dev alpine-sdk python
RUN npm install -g yarn
ADD ./app/yarn.lock .
ADD ./app/package.json .
RUN yarn install

# build python
FROM node:10.16-alpine AS service

RUN apk add --no-cache tini
RUN apk --no-cache add curl
RUN curl -LJO "https://raw.githubusercontent.com/mrako/wait-for/master/wait-for" \
  && chmod +x wait-for \
  && mv wait-for /usr/local/bin
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /app
COPY ./app /app
EXPOSE 3400

COPY --from=node_modules /tmp/node_modules ./node_modules/
CMD ["yarn", "start"]
