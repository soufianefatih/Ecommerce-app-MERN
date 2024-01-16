/* -------------------------------------------------------------------------- */
/*                               app|| Config                                 */
/* -------------------------------------------------------------------------- */



const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const AppError = require('./utils/HttpError');
const handleGlobalErrors = require('./middleware/ErrorMiddleware');
const cors = require('cors')
// const{ virifylogin} = require('./middleware');



app.use(cors())

 //* the will let us get data the data form post
 app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.use(bodyParser.json());



//* Require Routes


//* Register Our Routes



//* global midleware for not router
app.all('*',(req, res,err) => {
  res.status(404).json({ message: "Root Not Found" });
});


// Route handler example
app.get('/example', (req, res, next) => {
  // Some logic that might throw an error
  const err = new AppError('Example error message', 404);
  next(err); // Pass the error to the next middleware
});

// Global error handling middleware (should be the last middleware)
app.use(handleGlobalErrors);     



module.exports = app;
