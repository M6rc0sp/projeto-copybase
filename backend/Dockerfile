# Estágio de Desenvolvimento
FROM node:lts AS development

WORKDIR /usr/src/app

COPY ./backend/package*.json ./

RUN npm install glob rimraf
RUN npm install --only=development

COPY ./backend .

RUN npm run build

# Estágio de Produção
FROM node:lts as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY --from=development /usr/src/app/package*.json ./
RUN npm install --only=production

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]
