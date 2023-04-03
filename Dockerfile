FROM node:18.11.0
WORKDIR /home/src
COPY . .
RUN npm install
RUN npm run build
WORKDIR /home/app
COPY /home/src/dist .
COPY /home/src/node_modules .
EXPOSE 3000
CMD [ "node" ,"dist/main.js" ]