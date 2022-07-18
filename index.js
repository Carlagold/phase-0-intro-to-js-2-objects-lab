// Write your solution in this file!
const employee = {
    'name': 'Mellie',
    'streeAdress': '3140 Crystal Lakes'
}
    function updateEmployeeWithKeyAndValue(employee, key, value) {
        const newEmployeeObject = {...employee, [key]: value};
        return newEmployeeObject;
    
    }

    function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
         return employee;
     }

     function deleteFromEmployeeByKey(employee, key) {
        const newEmplyeeObj2 = {...employee};
        delete newEmplyeeObj2[key];
        return newEmplyeeObj2;
     }
     
     function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
       return employee;
     }