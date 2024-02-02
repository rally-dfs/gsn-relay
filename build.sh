#! /bin/bash
set -xe

apt-get update 

# install build deps
apt-get install -y \
  python3 \
  git \
  make \
  gcc \
  g++ 

# node package and compiling
yarn install --no-cache --frozen-lockfile
yarn tsc
yarn run webpack
cp /app/dist/webpack-relayserver.js /app/relayserver.js
  
# remove build deps
apt-get remove --purge -y \
  python3 \
  git \
  make \
  gcc \
  g++
apt-get autoremove --purge -y
  
# remove caches
rm -rf /var/lib/apt/lists/*
rm -rf node_modules dist /usr/local/share/.cache/yarn 

