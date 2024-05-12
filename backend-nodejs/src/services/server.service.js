const express = require("express");
const cors = require("cors");
const expressListEndpoints = require("express-list-endpoints");
const { api } = require("../../constants");
const { connectDatabase } = require("../../config");

const defaultPort = 3000;

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || defaultPort;

    //Database
    this.dbConnection();
    //MiddleWares
    this.middleWares();
    //App Routes
    this.routes();
  }

  middleWares() {
    //Cors
    this.app.use(cors());
    //Read and Body Parse
    this.app.use(express.json());
  }

  async dbConnection() {
    await connectDatabase();    
  }

  routes() {
    this.app.use(api, require("../routes"));
    console.log("Endpoints List:", expressListEndpoints(this.app));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("App running in port", this.port);
    });
  }
}

module.exports = Server;
