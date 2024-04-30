FROM node:18.12-alpine3.16
 # COPY PACKES.JSON
COPY ./package*.json ./
 # copy rest of code 
COPY --chown=node:node . .

RUN npm install --only=prod


CMD ["npm", "run", "start"]
