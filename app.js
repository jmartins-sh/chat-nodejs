require('dotenv').config();

const express = require('express');
const PORT = proccess.env.PORT || 3000;

appServer = express();

appServer.get('/', (req, res) => {
    res.send('Hello Friend!');
});

appServer.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
});

