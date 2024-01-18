# Estágio de Construção
FROM node:lts as build-stage

# Criação do diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
COPY . .

# Instalação das dependências
RUN npm install

# Build do Nest.js (se necessário, ajuste para o seu caso)
RUN npm run build

# Estágio de Produção
FROM node:lts-alpine as production-stage

# Copia apenas os arquivos necessários para o estágio de produção
COPY --from=build-stage /app/dist /app/dist

# Exponha a porta necessária
EXPOSE 3000

# Comando para iniciar o servidor (ajuste conforme necessário)
CMD ["node", "/app/dist/main.js"]
