const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorHandler')
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')
const app = express();

connectDB() 

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)


app.use('/api/employees', require('./routes/adminRoute'))
app.use('/api/employee', require('./routes/employeeRoute'))


app.listen(port, () => console.log(`Server started on port ${port}`));
