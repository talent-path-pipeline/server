const ErrorWithHTTPStatus = require('../utils/errorWithHTTPStatus');

const errorHandler = (err, request, response, next) => {
  console.error(`From the middleware: ${err}`);
  if (err instanceof ErrorWithHTTPStatus) {
    response.status(err.status).send(`An error has occurred: ${err.message}`);
  } else {
    console.error(`An error has occurred on the server: ${err}`);
    response.status(500).send(`An error has occurred on the server.`);
  }
};

module.exports = errorHandler;
