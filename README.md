<h1 align="center">⚽️ football-teams-server</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#api-docs" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> NodeJS server allowing you to store football club data and perform CRUD operations on the exposed API. The accompanying front end client for this server can be found at https://github.com/mwesterby/football-teams-client.

## Install

```sh
npm install
```

## Usage

**Note**: The server requires a local mongo instance to be running. You can start one with [docker](https://www.docker.com/) using:
```sh
docker run -d --name local-mongo -p 27017:27017
```

And then start the server with:
```sh
npm start
```

## Run tests

```sh
npm test
```

## API Docs
Docs can be found at [`http://localhost:3000/api-docs/`](http://localhost:3000/api-docs/)  when the server is running.

## Author

👤 **Michael Westerby**

* Website: https://github.ibm.com/Michael-Westerby
* Github: [@mwesterby](https://github.com/mwesterby)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
