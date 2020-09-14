const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { connectDb } = require('./models');
const port = process.env.SERVER_PORT || 3000;
const middleware = require('./middleware');
const initialize = require('./utils/initialize');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/v1', routes);
app.use(middleware.errorHandler.handleErrors)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server listining on port ${port}`)       
        if(process.env.NODE_ENV == undefined || !process.env.NODE_ENV == 'test') {
            initialize.populate();
        }
    });
})


module.exports = app;