FROM node:16-buster

WORKDIR /app/

COPY entrypoint.sh /entrypoint.sh

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

RUN yarn install

COPY . /app/

RUN yarn tsc
RUN yarn run webpack

ENTRYPOINT [ "/entrypoint.sh" ]
CMD node --no-deprecation /app/relayserver.js
