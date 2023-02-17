# URL Shortener

This is a web application that allows users to shorten URLs. It includes a frontend built with React and a backend built with NestJS, with MongoDB as the database.

## Setup

Ensure you have [node version 16](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [MongoDB installed](https://www.mongodb.com/docs/manual/installation/).

To set up the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/NatalieTanML/govtech-gw.git` and run `cd govtech-gw`
2. Install the dependencies for the server: `cd server` and run `npm install`
3. Install the dependencies for the client: `cd ../client` and run `npm install`
4. Create a `.env` file in `./server` and add the following environment variables:
```
DB_HOST=localhost
DB_PORT=27017
DB_NAME=govtechgw
```
5. Run MongoDB as a service.

## Usage

To start the server, run the following on the terminal: 
```
cd ../server
npm run start:dev
```

To start the client, run the following in another terminal: 
```
cd ../client
npm start
```

The server will run on `http://localhost:5000` and the client will run on `http://localhost:3000`.

## Tests

To run the tests, run:
```
cd ../server
npm run test
```

This will run the tests and output the results in the terminal.
