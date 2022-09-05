
const getEmployee = (req, res) => {
    res.send('geting employee')
}


const addEmployee = (req, res) => {
    res.send('adding employee')
}


const updateEmployee = (req, res) => {
    res.send('updating employee')
}


const deleteEmployee = (req, res) => {
    res.send('deleting employee')
}


module.exports ={
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
}