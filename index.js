const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}))

app.get('/us-total', async (req, res) => {
    const data = (await axios.get('https://api.covidtracking.com/v1/us/current.json')).data[0];
    res.json(data);
})

app.get('/states-total', async (req, res) => {
    const data = (await axios.get('https://covidtracking.com/api/states')).data;

    res.json(data);
})

app.listen(4000, () => {
    console.log('4000 port')
});
