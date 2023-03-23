FROM node:18.11.0
WORKDIR /home/app
COPY . .
RUN npm install
EXPOSE 3000
