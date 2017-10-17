#!/bin/bash
mv ../.env .
mv ../.env_production ../.env

rm -rf build.tar.gz

npm run build

cd ../build
tar -zcvf build.tar.gz *
cd ../automation
mv ../build/build.tar.gz .



mv ../.env ../.env_production
mv .env ../
#rm -rf build.tar.gz