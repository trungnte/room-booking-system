FROM node:latest@sha256:22f1866405ad50bb1d141739596ba803aed073d618ab2ae6d5e66aedcf9261b5
RUN apt-get update
RUN apt-get install -y apt-utils
RUN apt-get install -y vim
WORKDIR /var/www/code/web
COPY  . .
RUN yarn install
CMD tail -f /dev/null