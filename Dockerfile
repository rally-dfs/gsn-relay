FROM node:16-buster-slim

WORKDIR /app/

COPY entrypoint.sh /entrypoint.sh

COPY . /app/

RUN ./build.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD node --no-deprecation /app/relayserver.js
