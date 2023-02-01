# Verwenden  Basis-Image mit Node.js v12
FROM node:12

# Erstelle directory
WORKDIR /usr/src/app

# Installiere app dependencies
COPY package*.json ./

RUN npm install

# Kopiere app source code
COPY . .

# Starten den ReactJS-Server auf Port 3000
EXPOSE 3000
CMD ["npm", "start"]