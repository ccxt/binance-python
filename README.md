# about

this is dev.repo, not meant to be used by end users.

# instructions

- At first, generate `Personal Access Token` under `CCXT` org, with the access to this current repository and also to all other repositories (there are around 20 repositories named like: `github.com/ccxt/{exchange}-python`) with the scopes `actions, commit statuses, contents, workflows` and set that value for action secret with the name `API_TOKEN_FOR_CCXT_SINGLE_EXCHANGES`.

- Then inside `.github/workflows/transfer-all.yml` set the desired array of exchanges in matrix. On `push` event, if commit message contains `[build]`, this repo files will be distributed to those dozen exchange repositories.

- Immediately, as those repositories get `push` event, they will start build with `.github/workflows/build-single-exchange.yml` flow and each repo (you should set `PYPI_API_SECRET_SP` secret with pypi api key, under each repository) will push a package to pypi.org. Versions are incremental by patch version at this moment.

- All other things are WIP and can be customized.