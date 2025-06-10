#!/bin/sh


username=${1:-"username"}
token=${2:-"commit"}
repo=${3:-"curl"}
branch=${4:-"main"}


 git push https://$username:$token@github.com/$username/$repo.git main:$branch
