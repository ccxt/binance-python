#!/bin/bash

git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"
git add README.md
git commit -m "Update README with exchange repository links" || echo "No changes to commit"
git push