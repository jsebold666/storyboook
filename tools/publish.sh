#!/bin/sh

yarn lint
yarn prettier
yarn prebuild
yarn build

if [[ $(git status) =~ "nothing" ]]; then 
  VERSION=$(node increment-version.js | sed 's/Version\://g')
  echo "RELEASE $VERSION"

  git commit -am "RELEASE $VERSION" 
  git tag $VERSION
  git push && git push --tags
else
  echo "Cannot publish because you have uncommited work"
  exit 1;
fi