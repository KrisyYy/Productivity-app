const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors(process.env.CORS_OPTIONS));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

const db = require('./models/index.js');
db.sequelize.sync();

const tasks = require('./routes/tasks.js');
app.use('/tasks', tasks);


app.listen(process.env.PORT, () => {
    console.log("listening on port: " + process.env.PORT);
})