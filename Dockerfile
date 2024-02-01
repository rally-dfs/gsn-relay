FROM node:13-buster-slim
COPY dist/webpack-relayserver.js app/relayserver.js
CMD node --no-deprecation /app/relayserver.js
