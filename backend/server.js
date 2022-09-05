const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorHandler')
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)


app.use('/api/employees', require('./routes/adminRoute'))



app.listen(port, () => console.log(`Server started on port ${port}`));
