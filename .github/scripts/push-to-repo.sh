#!/bin/bash

# Get arguments
EXCHANGE_NAME=$1
COMMIT_MSG=$2

# Clone and push to the repo
TEMP_DIR=$(mktemp -d)
TEMP_DIR_GIT="$TEMP_DIR/$EXCHANGE_NAME-python"
echo "Cloning $EXCHANGE_NAME-python repository into $TEMP_DIR_GIT"
git clone https://x-access-token:$GITHUB_API_TOKEN@github.com/ccxt/$EXCHANGE_NAME-python.git $TEMP_DIR_GIT
# at first, clean th directory (except .git directory) and copy all files
echo "Clone finished"
rm -rf $TEMP_DIR_GIT/*
rm -rf $TEMP_DIR_GIT/.github/*
rsync -av --info=progress2 --info=name0 --exclude='.git/' --exclude='tmp/' --exclude='build/ccxt/' ./ $TEMP_DIR_GIT
rm -f $TEMP_DIR_GIT/.github/workflows/transfer-all.yml
rm -f $TEMP_DIR_GIT/.github/workflows/transfer-exchange.yml
rm -r $TEMP_DIR_GIT/.vscode/
rm -f $TEMP_DIR_GIT/vsc-workspace.code-workspace
cd $TEMP_DIR_GIT
echo $EXCHANGE_NAME > exchange_name
git config user.name github-actions
git config user.email github-actions@github.com
git add .
rm -f README.md
(git commit -m "$COMMIT_MSG" && git push origin main --force) || echo "No changes to commit"