const express = require('express')
const mongoose = require('mongoose')
const app = require('./app')
const PORT_SERVER = process.env.PORT || 3977
const {logErrors, errorHandler} = require('./src/middlewares/handlers/errors.handler')
const { API_VERSION, IP_SERVER, PORT_DB} = require('./config')
const routerAPI = require('./src/routes/index')

mongoose.connect(
`mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
{ useNewUrlParser: true, useUnifiedTopology: true },
(err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("Success connection to db");
    app.listen(PORT_SERVER, () => {
      console.log('########################')
      console.log('####### API REST  ######')
      console.log('########################')
      console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`)
  });
}
}
);


routerAPI(app)
app.use(express.json());

app.use(logErrors)
app.use(errorHandler)
