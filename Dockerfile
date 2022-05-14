FROM node:lts-buster

RUN apt-get update 
RUN apt-get install -y

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","."]
