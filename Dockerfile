# image de base
FROM node:20.13
# répertoire de W dans le conteneur
WORKDIR /usr/src/app
# copie des fichiers du projet dans le répertoire de W du container
COPY . /usr/src/app
# installation de dépendances
RUN npm install
# port sur lequel l’application écoute
EXPOSE 3000
# commande exécutée lorsque le conteneur démarre
CMD ["npm", "run", "dev"]
