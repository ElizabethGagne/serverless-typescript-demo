# serverless-typescript-demo

This is a very basic project demonstrating how to build a Serverless application using TypeScript, including linting and tests. You can refer to [this blog post](https://gregshackles.com/getting-started-with-serverless-and-typescript/) as a walkthrough of the code here.
For more info about Serverless: https://serverless.com/

## Define your aws credentials with the profile TEKsystems
edit ~/.aws/credentials

```
[TEKsystems]
aws_access_key_id = XXX
aws_secret_access_key = YYYY
```


## Bake the serverless-docker image
Follow the README to bake the image 

## Run all demo commands into the docker container

N.B: I git clone the repo into my personal folder /Users/egagne/git_root

- Launch the runtime interactive container by mounting your development + aws credential directories as volumes  (absolute path):
```
docker run -it -p 8000:8000 -v /Users/egagne/git_root:/src -v /Users/egagne/.aws/:/root/.aws:ro serverless-docker:latest /bin/bash
```

- Now into the Docker terminal, cd to your typescript demo git repo:
```
root@ea886cea5989:/# cd /src/serverless-typescript-demo
root@ea886cea5989:/src/serverless-typescript-demo# <type any following commands>
```

- To test the lambda version locally:
```
root@ea886cea5989:/src/serverless-typescript-demo# sls webpack invoke -f hello -p event.json
```

- To simulate API Gateway locally:
```
root@ea886cea5989:/src/serverless-typescript-demo# sls webpack serve
```
Then with your browser enter the URL: http://localhost:8000/hello

- To create the infrastructure in aws (Cloud-Formation template that will create S3 buckets, Api Gateway endpoint + Lambda Function):
```
root@ea886cea5989:/src/serverless-typescript-demo# sls deploy
```
Then with your browser enter the Endpoint URL the serverless give you, something like: https://oddletters.execute-api.us-west-2.amazonaws.com/dev/hello

- To run local mocha tests:
npm run test (karma doesn't start the mocha tests, cannot figure out why)
```
root@ea886cea5989:/src/serverless-typescript-demo# npm run test:local
```

- To send a msg to kinesis:
```
root@ea886cea5989:/src/serverless-typescript-demo# sls invoke --function dataReceiver --path kinesis.json
```
