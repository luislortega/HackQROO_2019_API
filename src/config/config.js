// Fix the deprecated system
const Sequelize = require('sequelize');
const op = Sequelize.Op;

module.exports = {
  db: {
    database: process.env.DB_NAME || 'dumrepjl9u7p',
    user: process.env.DB_USER || 'uboourixzoiqoy',
    password: process.env.DB_PASS || '1dca2813c8ad4b7dd211f651c5d45518d04583f4f7b112c0c2798ce515577cff',
    options: {
      dialect: process.env.DIALECT || 'postgres',
      ssl: true,
      dialectOptions: {
        ssl: true
      },
      host: process.env.HOST || 'ec2-50-19-95-77.compute-1.amazonaws.com',
      operatorsAliases: op.gt, //Fix the deprecated string based operator
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret',
  },
};
