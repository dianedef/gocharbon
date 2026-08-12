FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000 4321
CMD ["npx", "astro", "dev", "--host", "0.0.0.0"]
