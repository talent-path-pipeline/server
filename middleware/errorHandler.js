const ErrorWithHTTPStatus = require('../utils/error.httpStatus.utils');

const errorHandler = (err, request, response, next) => {
  // console.error(`From the middleware: ${err}`);
  const errMsg = `An error has occurred on the server:\n\t${err}`;
  if (err instanceof ErrorWithHTTPStatus) {
    response.status(err.status).send(`An error has occurred: ${err.message}`);
  } else {
    console.error(errMsg);
    response.status(500).send(errMsg);
  }
};

module.exports = errorHandler;
