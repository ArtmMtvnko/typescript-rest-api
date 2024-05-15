FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=4242
ENV MONGODB_URI=mongodb+srv://artemm3note:tOObt9xCDYclueUY@cluster0.brpjm4n.mongodb.net/Entries?retryWrites=true&w=majority&appName=Cluster0

EXPOSE 4242

CMD [ "npm", "run", "dev" ]