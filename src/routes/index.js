const express = require("express");
const users_router = require("./users.route");
const avion_router = require("./avion.route")

function routerApi(app){
    const routes = express.Router();
    routes.use("/users",users_router); /* endpoint http://localhost:3977/api/v1/users/ */
    routes.use("/aviones",avion_router); /* endpoint http://localhost:3977/api/v1/aviones/ */
    app.use("/api/v1", routes); /* endpoint http://localhost:3977/api/v1 */
}

module.exports = routerApi;
