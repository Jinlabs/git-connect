# post-2-linkedin

> A GitHub App built with [Probot](https://github.com/probot/probot) that A Github App which will monitor the pull requests of a Github account and make a post to the user’s Linkedin account.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t post-2-linkedin .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> post-2-linkedin
```

## Contributing

If you have suggestions for how post-2-linkedin could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Aniket Prakash <b218004@iiit-bh.ac.in>
