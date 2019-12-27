FROM node:10-slim

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY api/package*.json ./

RUN npm install

COPY --chown=node:node ./api ./

USER node

EXPOSE 9001

CMD [ "npm", "start" ]