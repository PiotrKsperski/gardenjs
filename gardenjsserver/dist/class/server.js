"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    bootstrap() {
        return new Server();
    }
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.api();
    }
    api() {
    }
    config() {
    }
    routes() {
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map