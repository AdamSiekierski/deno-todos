#!/bin/bash

if [ $1 = "start" ]; then
  deno run -A --config ./tsconfig.json index.ts
elif [ $1 = "test" ]; then
  deno test -A --config ./tsconfig.json ./tests
fi
