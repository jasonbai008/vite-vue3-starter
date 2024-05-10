#! bin/bash
yarn build
git add .
git commit -m 'release and deploy'
git push