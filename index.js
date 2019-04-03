const http = require('http');
const express = require( 'express');
const cors = require( 'cors');
const morgan = require( 'morgan');
const bodyParser = require( 'body-parser');
const config = require( './src/config.js');

let app = express();
app.server = http.createServer(app);

require('dotenv').config();

app.use(morgan('dev'));

app.use(cors());

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});
