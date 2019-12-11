// Fix the deprecated system
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports = {
  db: {
    database: process.env.DB_NAME || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      ssl: true,
      dialectOptions: {
        ssl: true
      },
      host: process.env.HOST || '',
      operatorsAliases: op.gt, //Fix the deprecated string based operator
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
