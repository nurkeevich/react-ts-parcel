FROM node:13-alpine3.11

WORKDIR /app

COPY package.json .

RUN yarn

RUN yarn global add react-scripts@3.3.1

COPY . .

CMD [ "yarn", "start" ]
