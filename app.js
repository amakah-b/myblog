// Requires packages
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const { PORT, BASE_URL } = process.env;
// console.log(process.env);

// instantiating or intializing packages
const app = express();

// parse application configuration
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Routes
app.use("/api", require("./routes/home.route"));

// start server
app.listen(process.env.PORT || 3000, () => {
  console.log(` The server is running on port ${BASE_URL} ${PORT}`);
});
