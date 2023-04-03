FROM node:18.11.0
WORKDIR /home/src
COPY . .
RUN npm install
RUN npm run build
RUN ls
RUN PWD
WORKDIR /home/app
COPY /home/src/dist .
COPY /home/src/*.json .
RUN npm install
EXPOSE 3000
CMD [ "node" ,"dist/main.js" ]