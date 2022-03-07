"use strict";
exports.__esModule = true;
var express = require("express");
require("express-async-errors");
var methodOverride = require("method-override");
var express_1 = require("express");
var path = require("path");
var express_handlebars_1 = require("express-handlebars");
var home_1 = require("./routers/home");
var edit_1 = require("./routers/edit");
var update_1 = require("./routers/update");
var delete_1 = require("./routers/delete");
// import {normalizePort} from "normalize-port"
// import {v4 as uuid} from 'uuid'
var app = express();
// let port = process.env.PORT || 8080
app.use(methodOverride('_method'));
app.use((0, express_1.urlencoded)({
    extended: true
}));
app.use((0, express_1.static)(path.join(__dirname, '/public')));
app.engine('.hbs', (0, express_handlebars_1.engine)({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use('/', home_1.homeRouter);
app.use('/edit', edit_1.editRouter);
app.use('/update', update_1.updateRouter);
app.use('/delete', delete_1.deleteRouter);
app.listen(3000, 'localhost', function () {
    console.log('Listening on http://localhost:3000');
});
