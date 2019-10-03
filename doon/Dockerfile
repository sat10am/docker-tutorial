# build stage
FROM python:3.7-alpine AS builder

WORKDIR /tmp
COPY requirements.txt /tmp
RUN pip install -r requirements.txt -t ./packages

# service stage
FROM python:3.7-alpine AS service

# Installing client libraries and any other package you need
RUN apk update && apk add libpq
# Installing build dependencies
# For python3 you need to add python3-dev *please upvote the comment
# of @its30 below if you use this*
RUN apk add --virtual .build-deps gcc python-dev musl-dev postgresql-dev
# Installing and build python module
RUN pip install psycopg2
RUN pip install gunicorn
# Delete build dependencies
RUN apk del .build-deps

WORKDIR /app
COPY --from=builder /tmp/packages /usr/local/lib/python3.7/site-packages/
COPY ./docker-entrypoint.sh /
COPY ./todo .
EXPOSE 8000

ENTRYPOINT [ "/docker-entrypoint.sh" ]
