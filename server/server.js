require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const db = require('./models/index.js');
const authRoutes = require('./routes/auth.js');
const taskRoutes = require('./routes/tasks.js');
const userRoutes = require('./routes/users.js');
const errorHandler = require('./middleware/errorHandler.js');
const PORT = process.env.PORT;
const corsOptions = process.env.CORS_OPTIONS;

const app = express();

app.use(cors(corsOptions));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cookieParser())

db.sequelize.sync();

app.use('/tasks', taskRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log("listening on port: " + PORT);
})