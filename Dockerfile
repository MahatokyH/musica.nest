FROM node:18.11.0
WORKDIR /home/src
COPY . .
RUN npm install
RUN npm run build
WORKDIR /home/app
RUN ["mv","/home/src/dist","."]
RUN ["mv","/home/src/node_modules","."]
RUN ["mv","/home/src/*.json","."]
RUN ["rm","/home/src","-R"]
RUN npm install
EXPOSE 3000
CMD [ "node" ,"dist/main.js" ]