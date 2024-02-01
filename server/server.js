const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./models/index.js');
const taskRoutes = require('./routes/tasks.js');
const userRoutes = require('./routes/users.js');
const PORT = process.env.PORT || 8080;
const corsOptions = process.env.CORS_OPTIONS;
require('dotenv').config();

const app = express();

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser())


db.sequelize.sync();

app.use('/tasks', taskRoutes);
app.use('/user', userRoutes);


app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
})