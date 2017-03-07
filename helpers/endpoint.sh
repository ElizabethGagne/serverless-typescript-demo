#!/bin/bash

# Assuming you deployed with a 'serverless deploy | tee deploy.out' this script
# will auto fill in the API_ENDPOINT environment variable

node helpers/getEndpoint.js > .build/endpoint.out
export API_ENDPOINT=`cat .build/endpoint.out`

echo $API_ENDPOINT