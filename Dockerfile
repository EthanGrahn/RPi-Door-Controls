FROM node:12-alpine3.12@sha256:fac6cd31a34bab36e2c0f050a010dd50c65fbe6cf93a1420f6c3aa11c62bb855

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000

CMD ["node", "./bin/www"]