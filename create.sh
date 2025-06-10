#!/bin/sh


username=${1:-"username"}
token=${2:-"commit"}
repo=${3:-"curl"}
branch=${4:-"main"}

curl -X POST \
-H "Authorization: Bearer $token" \
-H "Accept: application/vnd.github+json" \
-H "X-GitHub-Api-Version: 2022-11-28" \
https://api.github.com/user/repos \
-d '{"name": "'"$repo"'", "private": false, "description": "commit update"}'

 git push https://$username:$token@github.com/$username/$repo.git main:$branch
