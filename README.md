[<img src="./assets/logo.png" alt="LAMF5" width="60%" />](https://lamf5.vercel.app/)

<p align="center">
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E6&labelColor=121214" alt="License">

## Project

Backend for the LAMF5's (Liga Acadêmica de Mercado Financeiro da UFV) website using GraphQL, Mongoose and Apollo Server

## Technologies

Implemented technologies:

- [GraphQL](https://graphql.org/)
- [Mongoose](https://mongoosejs.com/)
- [Apollo Server](https://www.apollographql.com)

## Build

Install node dependencies:

    ```bash
    $ npm install
    ```

Configure the database creating a config.js:

    ```javascript
    module.exports = {
      "MONGODBPROD": $prod_url,
      "MONGODBTEST": $test_url,
      "PORT": $port_number
    }
    ```

Start the backend:

    ```bash
    $ npm start
    ```

---

<p align="center">Developed by Gabriel Franco</p>