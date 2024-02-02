FROM node:13-buster-slim

COPY dist/webpack-relayserver.js /app/relayserver.js
COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
CMD node --no-deprecation /app/relayserver.js
