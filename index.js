const employee = {
    name: "Josphat Kiruku",
    streetAddress: "Nairobi Parklands",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee}

    newObj[key] = value

    return (newObj);
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){

    employee[key] = value

    return (employee);
}

function deleteFromEmployeeByKey(employee, key, value){
    const newObj = {...employee}

    newObj[key] = value

    delete newObj.key

    return (newObj);
}


function  destructivelyDeleteFromEmployeeByKey(employee, key, value){

    employee[key] = value

    delete employee.key

    return (employee);
}

// const newEmployee = updateEmployeeWithKeyAndValue (
//     employee,
//     ""
// )

