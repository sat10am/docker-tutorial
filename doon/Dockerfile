# build stage
FROM python:3.7 AS builder

WORKDIR /tmp
COPY requirements.txt /tmp
RUN pip install -r requirements -t ./packages

# service stage
FROM python:3.7-alpine AS service

WORKDIR /app
COPY . .
COPY --from=builder /tmp/packages /usr/local/lib/python3.7/site-packages/

CMD ["./todo/manage.py", "runserver"]
EXPOSE 8000
