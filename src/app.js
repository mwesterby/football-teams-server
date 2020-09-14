const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { connectDb } = require('./models');
const port = process.env.SERVER_PORT || 3000;
const middleware = require('./middleware');
const initialize = require('./utils/initialize');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', routes);
app.use(middleware.errorHandler.handleErrors)

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server listining on port ${port}`)       
        if(process.env.NODE_ENV == undefined || !process.env.NODE_ENV == 'test') {
            console.log("NOT A TEST");
            // initialize.populate();
        }
    });
})


module.exports = app;