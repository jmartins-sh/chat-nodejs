require('dotenv').config();

const express = require('express');
const PORT = proccess.env.PORT || 3000;

app = express();

app.get('/', (req, res) => {
    res.send('Hello Friend!');
});

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`)
});

