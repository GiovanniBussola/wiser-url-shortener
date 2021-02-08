# wiser-url-shortener

Wiser Url Shortener is a API that allows you to shorten links!

## Instalation

```sh
$ cd wiser-url-shortener
$ docker-compose up -d
$ yarn
$ yarn typeorm migration:run
$ yarn dev:server
```

## Routes
| Url           | Method  | Body                                    | Use                            |
| :------------ |:--------| :---------------------------------------|:-------------------------------|
| /api          | GET     |                                         | Returns that server is working |
| /urls         | POST    | {"newUrl": "https://wisereducacao.com"} | Insert and return a shorten URL|
| /:shorted_url | GET     |                                         | Returns the saved URL          |




## Unit Tests

To run a test, type on terminal
```sh
$ yarn test
```
