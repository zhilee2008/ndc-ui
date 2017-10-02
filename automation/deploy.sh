#!/bin/bash
mv ../.env .
mv ../.env_production ../.env
#本地build然后远程拷贝到server
npm run build
rm -rf build.tar.gz
cd ../build
tar -zcvf build.tar.gz *
cd ../automation
mv ../build/build.tar.gz .
scpCent build.tar.gz


docker stop dgt-ui
docker rm -f dgt-ui
docker rmi -f autobotstech.com:6789/dgt-ui:1.0
docker build --no-cache -t autobotstech.com:6789/dgt-ui:1.0 .
docker push autobotstech.com:6789/dgt-ui:1.0


ssh root@47.92.82.178 << RUN
    #去server上部署一个staging环境
    cd /root/softwares/ui/dangerous-goods-transport-ui/
    mv -f /root/softwares/build.tar.gz .
    rm -rf build
    mkdir build
    cd build
    tar -zxvf ../build.tar.gz

    #去server上部署一个生产环境
    docker stop dgt-ui
    docker rm -f dgt-ui
    docker rm -f dgt-ui-81
    docker rmi -f autobotstech.com:6789/dgt-ui:1.0
    docker pull autobotstech.com:6789/dgt-ui:1.0
    docker run -d -p 80:80 --name dgt-ui --restart=always autobotstech.com:6789/dgt-ui:1.0
    docker run -d -p 81:80 --name dgt-ui-81 --restart=always autobotstech.com:6789/dgt-ui:1.0
RUN


mv ../.env ../.env_production
mv .env ../
rm -rf build.tar.gz