FROM node:16-buster-slim

RUN apt-get update && apt-get install -y \
  python3 \
  git \
  make \
  gcc \
  g++ \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app/

COPY entrypoint.sh /entrypoint.sh

COPY . /app/

RUN yarn install --no-cache --frozen-lockfile && \
  yarn tsc && \
  yarn run webpack && \
  cp /app/dist/webpack-relayserver.js /app/relayserver.js && \
  rm -rf node_modules dist /usr/local/share/.cache/yarn

ENTRYPOINT [ "/entrypoint.sh" ]
CMD node --no-deprecation /app/relayserver.js
