const express = require('express');
const apicache = require('apicache');
const {setupSwagger: V1Docs} = require('./V1/swagger');
const v1Router = require('./V1/router/gameRoutes');
const setupSwagger = require('./V1/swagger');
const app = express();
const port = 3000;

app.use(express.json());
app.use(apicache.middleware('3 minutes'));
app.use('/api/v1/games', v1Router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    setupSwagger(app);
}
    
);

