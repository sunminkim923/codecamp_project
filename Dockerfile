FROM node:16

WORKDIR /myfolder/
COPY . /myfolder/
RUN yarn install

RUN yarn build:ssr
CMD yarn start