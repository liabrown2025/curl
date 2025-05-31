#!/bin/sh


message=${1:-"commit"}
username=${2:-"username"}

curl -X POST \
-H "Authorization: Bearer $message" \
-H "Accept: application/vnd.github+json" \
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/user/repos \
-d '{"name":"curl","description":"This is your first repository","private":false}'


 git push https://$username:$message@github.com/$username/curl.git main
