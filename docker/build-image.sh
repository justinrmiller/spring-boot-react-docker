#!/bin/bash

function green {
  echo -e "\033[92;1m\c"
}

function default {
  echo -e "\033[39;0m\c"
}

function msg {
  green
  echo ">> $*"
  default
}

msg Creating application jar
cd .. && mvn clean package && cd docker && cp ../target/boot-react-1.0-SNAPSHOT.jar .

msg Building a docker image...
docker build -t 'justinrmiller/bootreact' .

msg Done. Start with docker run -p 8888:8080 --name "boot" justinrmiller/bootreact