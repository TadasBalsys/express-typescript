"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['typescript'] }));
app.use(loginRoutes_1.router);
var PORT = 3000;
loginRoutes_1.router.get('/', function (req, res) {
    res.send("\n    <div>\n      <h1>Hello World</h1>\n    </div>\n  ");
});
app.listen(PORT, function () { return console.log("Server working on port: " + PORT); });
