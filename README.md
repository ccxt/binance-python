# about

this is internal dev repo, not meant to be used by end users.

# instructions

- At first, generate `Personal Access Token` under `CCXT` org, with the access to this current repository and also to all other repositories (there are around 20 repositories named like: `github.com/ccxt/{exchange}-python`) with the scopes `actions, commit statuses, contents, workflows` and set that value for action secret with the name `API_TOKEN_FOR_CCXT_SINGLE_EXCHANGES`.

- Then inside `.github/workflows/transfer-all.yml` set the desired array of exchanges in matrix. On `push` event, if commit message contains `[TRANSFER]`, this repo files will be distributed to those dozen exchange repositories.

- Immediately, as those repositories get `push` event (if commit message contains the phrase `[BUILD]`) the individual exchange repos start build with `.github/workflows/build-single-exchange.yml` flow, so the exchange-specific package is generated from raw skeleton repo & ccxt files. 

- If commit message also contained the phrase `[PUBLISH]` then they will push a package to pypi.org (you should set `PYPI_API_SECRET_SP` secret with pypi api key, under each repository). Versions are incremental by patch version at this moment.

- All other things are WIP and can be customized.
