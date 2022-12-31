# deploying full stack app

This project was deployed to aws using Circle CI/CD.
all the secrets and env variables are passed to circleci.

## Infrastructure description

- front end
- backend
- api

## App dependencies

each service has its own readme file contains all the info

## Screenshots

all required screenshots in ./documentation/screenshots

- aws services screen shots
- circleci screenshots
- pipelines
- other

## Pipeline process

- Install server dependencies
- Build server
- Deploy server to eb
- Install website dependencies
- Build website
- Deploy website to s3

website deployed successfully
server deployed successfully

``
front-end url : http://third-bocket.s3-website-us-east-1.amazonaws.com/

api url : http://app-one-todo.eba-guiuub2i.us-east-1.elasticbeanstalk.com/
