# wiser-url-shortener

Wiser Url Shortener is a API that allows you to shorten links!



## Getting Started

```sh
$ cd wiser-url-shortener
$ docker-compose up -d
$ yarn
$ cp .env.example .env
$ yarn typeorm migration:run
$ yarn dev:server
```

## Routes
| Url           | Method  | Body                                    | Use                            |
| :------------ |:--------| :---------------------------------------|:-------------------------------|
| /api          | GET     |                                         | Returns that server is working |
| /urls         | POST    | {"newUrl": "https://wisereducacao.com"} | Insert and return a shorten URL|
| /:shorted_url | GET     |                                         | Returns the saved URL          |


## Routes Documentation
Swagger Routes Documentation: http://localhost:8092

## Unit Tests

To run a test, type on terminal
```sh
$ yarn test
```
* After running the test, the application will create on root's project a coverage folder, you can see the test's percentage.
