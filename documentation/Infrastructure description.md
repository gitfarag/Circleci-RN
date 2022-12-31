# Infrastructure description

this app is deployed using circleci to aws infrastructure

## AWS infrastructure used

- elasticbeanstalk ( for api )
- Amazon S3 bucket ( for Frontend )
- RDS ( for Postgre SQL )

## Circleci

- used CI/CD in deploying this app
- used context to add the env vars
- add context to config.yml
- add env vars to eb in pipeline
