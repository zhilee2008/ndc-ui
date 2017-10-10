#!/bin/bash
mv ../.env .
mv ../.env_production ../.env

rm -rf build.tar.gz

npm run build

cd ../build
tar -zcvf build.tar.gz *
cd ../automation
mv ../build/build.tar.gz .

#TODO 加上密码信息
scp build.tar.gz ndc@47.52.75.37:/home/spa/


#TODO 这里可能需要sudo，
ssh spa@47.52.75.37 << RUN
    cd /usr/share/nginx/html

    tar -zxvf /home/spa/build.tar.gz .

RUN


mv ../.env ../.env_production
mv .env ../
rm -rf build.tar.gz