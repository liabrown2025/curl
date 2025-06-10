#!/bin/sh


username=${1:-"username"}
token=${2:-"commit"}
repo=${3:-"curl"}
branch=${4:-"main"}


curl -X POST \
--header 'Content-Type: application/json;charset=UTF-8' \
'https://gitee.com/api/v5/user/repos' \
-d '{"access_token":"'"$token"'","name":"'"$repo"'","has_issues":"true","has_wiki":"true","can_comment":"true","private":"true"}'


 git push https://$username:$token@gitee.com/$username/$repo.git main:$branch
