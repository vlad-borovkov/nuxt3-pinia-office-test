FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .
RUN yarn install --frozen-lockfile
RUN yarn build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
CMD [ "yarn", "serve:prod" ]
