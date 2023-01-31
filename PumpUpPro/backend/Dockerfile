# Verwenden Sie ein Basis-Image mit Node.js v12
FROM node:12


# Kopieren Sie die gesamte Angular-Anwendung in den Container
COPY /my-backend .
COPY /my-backend/src/api.js .

# Installieren Sie die Abhängigkeiten für die ReactJS-Anwendung

RUN npm install
RUN npm install mongose


# Starten Sie den ReactJS-Server auf Port 3000
CMD ["node", "api.js"]