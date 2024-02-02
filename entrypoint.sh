#!/bin/sh

JSON_STRING="{
  \"url\": \"$RELAYER_URL\",
  \"workdir\":  \"/app/data\",
  \"relayHubAddress\": \"$RELAYER_HUB_ADDRESS\",
  \"managerStakeTokenAddress\": \"$RELAYER_MANAGER_STAKE_TOKEN_ADDRESS\",
  \"ownerAddress\": \"$RELAYER_OWNER_ADDRESS\",
  \"gasPriceFactor\": $RELAYER_GAS_PRICE_FACTOR,
  \"ethereumNodeUrl\": \"$RELAYER_NODE_URL\",
  \"workerMinBalance\": \"$RELAYER_WORKER_MIN_BALANCE\",
  \"workerTargetBalance\": \"$RELAYER_WORKER_TARGET_BALANCE\",
  \"managerMinBalance\": \"$RELAYER_MANAGER_MIN_BALANCE\", 
  \"managerTargetBalance\": \"$RELAYER_MANAGER_TARGET_BALANCE\",
  \"runPaymasterReputations\": $RELAYER_RUN_PAYMASTER_REPUTATIONS
}"

mkdir -p /app/data/workers/${RELAYER_HUB_ADDRESS}
mkdir /app/data/manager/
mkdir /app/config

echo $JSON_STRING > /app/config/gsn-relay-config.json

echo "{\"seed\": \"$RELAYER_HUB_PRIVATE_KEY\"}" > "/app/data/workers/${RELAYER_HUB_ADDRESS}/keystore"
echo "{\"seed\": \"$RELAYER_MANAGER_PRIVATE_KEY\"}" > "/app/data/manager/keystore"

exec "$@"
