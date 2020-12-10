# An Annotated Modular webpack 5 Config

This is the companion github repo for the [An Annotated Modular webpack 5 Config](https://nystudio107.com/blog/an-annotated-modular-webpack-5-config-for-frontend-web-development) article.

It contains the full webpack config and ancillary files discussed in the article.

Please see the article for details.

## Using Docker

### Installation

1. Have Docker installed: https://docs.docker.com/get-docker/
2. Clone the repo via `git clone https://github.com/nystudio107/annotated-webpack-config.git`
3. Using a terminal, `cd` to the `annotated-webpack-config` directory
4. Build the Docker container via `make docker`
5. Install node modules via `make npm install`

### Using

#### Development Server

1. Start `webpack-dev-server` via `make npm run dev`
2. Point your web browser at http://localhost:8080/ show the developer tools JavaScript console

#### Production Build

1. Build the production assets via `make npm run build`
2. The production assets will appear in `web/dist/` after they are built
