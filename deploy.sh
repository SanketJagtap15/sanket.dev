
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'sanketjagtap.in' > CNAME

# git init
git checkout main
git add -A
git commit -m 'deploy with custom domain'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:SanketJagtap15/sanket.dev.git main:gh-pages

cd -
