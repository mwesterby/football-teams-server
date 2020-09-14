const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { connectDb } = require('./models');
const port = process.env.SERVER_PORT || 3000;
const middleware = require('./middleware');
const populate = require('./utils/populate');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', routes);
app.use(middleware.errorHandler.handleErrors)

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server listining on port ${port}`)
        populate.populate();
    });
})


module.exports = app;