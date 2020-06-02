FROM node:12.17-alpine as development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .


FROM node:12.17-alpine as builder

WORKDIR /usr/src/app

COPY --from=development /usr/src/app .

RUN npm run build

FROM nginx:stable-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=builder /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]
CMD ["nginx", "-g", "daemon off;"]