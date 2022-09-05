const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.get('api/goals', (req, res) => {
    res.send('geting employee')
})

app.post('api/goals', (req, res) => {
    res.send('adding new employee')
})

app.put('api/goals/:id', (req, res) => {
    res.send('updating employee')
})

app.delete('api/goals/:id', (req, res) => {
    res.send('deleting employee')
})

app.listen(port, () => console.log(`Server started on port ${port}`));
