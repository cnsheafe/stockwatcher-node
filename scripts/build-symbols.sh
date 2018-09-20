#!/bin/bash

# Export ENV variables into shell scope
filename=".env"
while read line
do
  export $line;
done < $filename

node ./scripts/build-symbols.js