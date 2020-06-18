"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var requireAuth = function (req, res, next) {
    req.session && req.session.isLoggedIn ? next() : res.redirect('/login');
};
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.isLoggedIn) {
        res.send("\n      <div>\n        <div>You are logged in</div>\n        <a href='/logout'>Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <div>You are not logged in</div>\n        <a href='/login'>Login</a>\n      </div>\n    ");
    }
});
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n        <div>\n          <label>Email</label>\n          <input name=\"email\" />\n        </div>\n        <div>\n          <label>Password</label>\n          <input name=\"password\" type=\"password\" />\n        </div>\n      <button>Submit</button>\n    </form>\n  ");
});
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    // email
    //   ? res.send(`${email} - ${password}`)
    //   : res.send('The email is incorrect');
    if (email &&
        password &&
        email === 'balsys.tadas@gmail.com' &&
        password === '123') {
        req.session = { isLoggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('The email is incorrect');
    }
});
router.get('/logout', requireAuth, function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/vip', requireAuth, function (req, res) {
    res.send("Welcome to protected route");
});
