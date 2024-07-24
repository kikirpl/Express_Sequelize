Quick Tutorial: Running Express JS and Sequelize

Step 1:
Install Node.js and npm: https://nodejs.org/en/download/package-manager
Create a project directory: mkdir express-sequelize-tutorial && cd express-sequelize-tutorial
Initialize npm project: npm init

Step 2:
Install Express JS and Sequelize: npm install express sequelize

Step 3:
Create database.js:
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});
module.exports = sequelize;

Step 4:
Create a Sequelize model:
// models/User.js
const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
User.sync({ force: true });
module.exports = User;

Step 5:
Create an Express JS router:
// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  }
});

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});
module.exports = router;

Step 6:
Create an app.js file:
const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

Step 7:
Run: node app.js

Notes:
Replace database and model information as needed.
Run User.sync({ force: true }); once to create the table in the database.
This is a basic example router, you can add more routers for your application.



