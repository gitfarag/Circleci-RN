#Pipeline process

## push to git hub

```
git push origin main
```

## Circleci

- caches the changes happened on repo
- follow the steps in the confic.yml file

## pipeline

### context for env vars

i created context in Circleci
i imported the context-name in workflows
thats all

### orbs:

node: circleci/node@5.0.0
aws-cli: circleci/aws-cli@2.1.0
eb: circleci/aws-elastic-beanstalk@2.0.1

### jobs

``
build

```
 steps
  install:
        node-version: 18.12.0
      - aws-cli/setup
      - checkout
      - eb/setup
      - SET APP Environment variables from circleci
      - SET AWS CREDENTIALS
      - Install server dependencies
      - Build server
      - Testing api units
      - Deploy server to eb
      - Install website dependencies
      - Build website
      - Deploy website to s3


```
