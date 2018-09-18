#!/bin/bash
filename=".env"
while read line
do
  export $line;
done < $filename

yarn start