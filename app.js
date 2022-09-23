const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const itemRoutes = require('./routes/route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(itemRoutes);

sequelize.sync()
.then( res => {
    app.listen(3000);
})
.catch();

