#!/bin/bash -e

IMAGE=opengsn/jsrelay

#build docker image of relay
#rebuild if there is a newer src file:
npx webpack

docker build -t $IMAGE .

