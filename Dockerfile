FROM node:18-alpine

# Instalar Python para ejecutar las pruebas de CD en el build
RUN apk add --no-cache python3

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Ejecutar el test: si Python da error (esperado=5), el build falla y Render se pone en ROJO
RUN python3 test.py

EXPOSE 3000

CMD ["npm", "start"]
