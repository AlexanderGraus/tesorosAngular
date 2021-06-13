/* Para desplegar en Heroku */

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/tesorosAngular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/tesorosAngular/'}),
);

app.listen(process.env.PORT || 8080);