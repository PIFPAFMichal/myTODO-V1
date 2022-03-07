import * as express from "express";
import 'express-async-errors';
import * as methodOverride from "method-override";
import {static as eStatic, urlencoded} from "express";
const path = require("path")
import {engine} from "express-handlebars";
import {homeRouter} from "./routers/home";
import {editRouter} from "./routers/edit";
import {updateRouter} from "./routers/update";
import {deleteRouter} from "./routers/delete";
// import {normalizePort} from "normalize-port"
// import {v4 as uuid} from 'uuid'


const app = express()


// let port = process.env.PORT || 8080
app.use(methodOverride('_method'));
app.use(urlencoded({
    extended:true,
}));
app.use(eStatic(path.join(__dirname,'/public')));
app.engine('.hbs', engine({
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/',homeRouter)
app.use('/edit', editRouter)
app.use('/update', updateRouter)
app.use('/delete', deleteRouter)


app.listen(3000, 'localhost', () => {
    console.log('Listening on http://localhost:3000');
});