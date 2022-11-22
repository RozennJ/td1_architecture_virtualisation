# stage build
 FROM alpine:3.15 as builder
 # chemin de travail
 WORKDIR usr/src/app
 # installation des paquets système
 RUN apk add --no-cache nodejs npm
 # copie des fichiers du dépôt
 COPY . .
 # installation des dépendances avec npm
 RUN npm install 
 RUN npm run build
 #---------------------------------------------
 #stage execution
 FROM alpine:3.15 as runner
 # installation des paquets système
 RUN apk add --no-cache nodejs npm
 # chemin de travail
 WORKDIR usr/src/app
 # copie package*.json
 COPY --from=builder usr/src/app/package*.json ./
 # installation des dépendances avec npm uniquement les "dependencies"
 RUN npm install --only=production 
 #copy from builder
 COPY --from=builder usr/src/app/dist ./dist
 # ecoute port 3030
 EXPOSE 3030
 # exécution
 CMD ["npm", "start"]


 
