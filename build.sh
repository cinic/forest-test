#!/bin/sh
git submodule init
git submodule update
cd foliage && yarn && yarn build
cd ../test && yarn
