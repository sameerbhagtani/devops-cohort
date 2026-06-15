FROM node:24-alpine

RUN npm install -g pnpm

COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY index.js index.js

RUN pnpm install

CMD ["node", "index"]
