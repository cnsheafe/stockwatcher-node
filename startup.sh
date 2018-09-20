#!/bin/bash

# Export ENV variables into shell scope
filename=".env"
while read line
do
  export $line;
done < $filename

# Create tables if they don't exist
psql -f src/db/init.sql "postgresql://$DB_NAME:$DB_PW@$DB_HOST?sslmode=require"

# Start the server
yarn start