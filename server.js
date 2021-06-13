/* Para desplegar en Heroku */

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/tesoros-angular'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/tesoros-angular/'}),
);

app.listen(process.env.PORT || 8080);