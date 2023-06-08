FROM node:18

WORKDIR usr/src/app

COPY . .

RUN npm ci --omit-de=dev

EXPOSE 8080

CMD ["node", "index.js"]