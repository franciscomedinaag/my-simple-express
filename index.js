//const exampleLibrary = require('./lib/example_lib');

// let configLib = {
  //   'hostname': process.env.HOSTNAME,
  //   'user': process.env.USERNAME,
  //   'pass': process.env.PASSWORD
// };
  
//libManager = new exampleLibrary(configLib);
  
const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const exampleRoutes = require("./routes/subruta.js");


app.use(express.json({
  limit: '256mb'
}));
app.use("/subruta", exampleRoutes);

app.post("/", (request, res) => {
  console.log(request.body)
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.sendStatus(200);
})

app.all('*', (req, res) => {
  console.log(`403: Someone attempted at ${req.path}`);
  res.status(403);
  res.end();
})

app.listen(PORT, () => {
  console.log(`Started on PORT ${PORT}`);
})