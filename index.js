//const exampleLibrary = require('./lib/example_lib');
const express = require("express");
require('dotenv').config();


// let configLib = {
//   'hostname': process.env.HOSTNAME,
//   'user': process.env.USERNAME,
//   'pass': process.env.PASSWORD
// };

//libManager = new exampleLibrary(configLib);


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({
  extended: false
}));

app.use(express.json());

app.post("/", (request, res) => {
  console.log(request.body);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.sendStatus(200);
})

app.listen(PORT, () => {
  console.log(`Started on PORT ${PORT}`);
})