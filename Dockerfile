FROM node:16
WORKDIR /docker-start
COPY . .
RUN npm install 
# EXPOSE  8080

CMD ["npm","run","start"]

