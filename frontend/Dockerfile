# Estágio de Construção
FROM node:lts as build-stage

# Criação do diretório de trabalho
WORKDIR /app

# Copia os arquivos necessários
COPY package*.json ./
COPY . .

# Instalação das dependências
RUN npm install

# Build da aplicação Vue.js
RUN npm run build

# Estágio de Produção
FROM nginx:alpine as production-stage

# Copia os arquivos construídos para o estágio de produção
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuração do Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
