#!/bin/sh
git submodule init
git submodule update
cd foliage && yarn && yarn build
cd ../test && yarn
cd ..
mkdir ./test/node_modules/foliage
cp -r ./foliage/dist ./test/node_modules/foliage/dist
cp ./foliage/package.json ./test/node_modules/foliage/package.json
cp -r ./foliage/node_modules/stylis ./test/node_modules/stylis
