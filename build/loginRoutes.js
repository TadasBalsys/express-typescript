"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = 3000;
app.get('/', function (req, res) {
    res.send("\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  ");
});
app.listen(PORT, function () { return console.log("Server working on port: " + PORT); });
