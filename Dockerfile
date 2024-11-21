# The instructions for the first stage
FROM node:21.6.1-alpine AS builder
WORKDIR /usr/src/app
#ARG NODE_ENV=development
#ENV NODE_ENV=${NODE_ENV}
EXPOSE 80
COPY package*.json .
RUN npm install  --legacy-peer-deps
COPY . ./
RUN npm run build
CMD ["npm", "start"]