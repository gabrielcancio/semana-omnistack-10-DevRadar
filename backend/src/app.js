const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const cors = require('cors');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(process.env.DB_MONGO_URL_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

exports.serverConfig = {
    app,
    server
}; 