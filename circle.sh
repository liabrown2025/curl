#!/bin/sh

for i in {1..100000}
do
  echo "Circle area: $i"
  node curl.js $i > /dev/null
done
