require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


// Require routes
const router = require('./routers/index');

const homeWebRouter = require('./routers/web/home-web-router');
const maincharacterWebRouter = require('./routers/web/maincharactert-web-router');
const videogameWebRouter = require('./routers/web/videogame-web-router');

const maincharacterApiRouter = require('./routers/api/maincharacter-api-router');
const videogameApiRouter = require('./routers/api/videogame-api-router');


mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("MDB connected..."))
    .catch(err => console.log(err.message));

const app = express(); 

app.use(express.json())

app.use('/', router);

app.use(cors({
    origin: '*'
}));

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname: ".hbs" // default: ".handlebars"
}))

app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use routes
app.use('/', homeWebRouter);
app.use('/maincharacter', maincharacterWebRouter);
app.use('/videogame', videogameWebRouter);
app.use('/api/maincharacter', maincharacterApiRouter);
app.use('/api/videogame', videogameApiRouter);



const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}/`);
})