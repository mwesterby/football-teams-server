const app = require('../../src/app');
const chai = require('./chai.setup');

module.exports = () => chai.request(app);