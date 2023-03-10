const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Metadata for the API
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Game API',
            version: '1.0.0',
            description: 'A simple Express Game API',
            license: {
                name: 'MIT',
                url: 'https://spdx.org/licenses/MIT.html',
            },
        },
    },
    apis: ['./src/V1/router/gameRoutes.js', './src/db/Game.js'],
};

// Docs
const specs = swaggerJSDoc(options);

// Function to setup the swagger docs
const setupSwagger = (app) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(specs));
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(specs);
    });
};

module.exports = setupSwagger;

