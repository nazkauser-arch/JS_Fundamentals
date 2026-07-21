const employees = [
  { id: 1, name: "Ali", department: "Engineering", salary: 90000 },
  { id: 2, name: "Sara", department: "Design", salary: 75000 },
  { id: 3, name: "Ahmed", department: "Engineering", salary: 110000 },
  { id: 4, name: "Zara", department: "Design", salary: 85000 },
  { id: 5, name: "Usman", department: "Sales", salary: 70000 }
];

//Return the names of all employees
let arrName = []
for (let employee of employees){
    arrName.push(employee.name)
}
console.log("Employee Names are: ", arrName)

//using map()
arrName = employees.map(employee => employee.name)
console.log("Employee Names are: ", arrName)

//Return employees earning more than 80,000
let arrSalary = []
for (let employee of employees){
    if(employee.salary > 80000){
        arrSalary.push(employee.name)
    }
}
console.log("The employees with salary more than 80,000 are :", arrSalary)

//using filter()
arrSalary = employees.filter((employee)=>employee.salary > 80000).map(employee => employee.name)
console.log("The employees with salary more than 80,000 are :", arrSalary)

//Calculate the total salary
let total_salary = 0
for (employee of employees){
    total_salary += employee.salary
}
console.log("Total Salary: ", total_salary)

//using reduce()
total_salary = employees.reduce((total_salary, employee) => {
    return total_salary += employee.salary
}, 0)
console.log("The total salary is: ", total_salary)

//Calculate the average salary
let avg_salary = 0
for (employee of employees){
    avg_salary = (total_salary / employees.length)
}
console.log("The average salary: ", avg_salary)

//using reduce()
avg_salary = employees.reduce((avg_salary, employee) => {
    return avg_salary = total_salary / employees.length
}, 0)
console.log("The average salary is: ", avg_salary)

//Group employees by department
function groupEmp(){
    const dept = {}
    for (let employee of employees){
        if(!(employee.department in dept)){
            dept[employee.department] = []
            dept[employee.department].push(employee.name)

        } else{
            dept[employee.department].push(employee.name)
        }
    }
    return dept
}
console.log(groupEmp(employees))

//Count employees in each department
function countEmp(){
    const dept = {}
    for (let employee of employees){
        if (!(employee.department in dept)){
                dept[employee.department] = 1
        } else{
            dept[employee.department]++
        }
    }
    return dept
}
console.log(countEmp(employees))

//Sort employees by salary without changing the original array
function sortEmp(employees) {
    const sortedEmployees = [...employees]
    sortedEmployees.sort((a, b) => a.salary - b.salary)
    return sortedEmployees
}

console.log(sortEmp(employees))

//Find the highest-paid employee
function highPaid(employees) {
    let highest_paid = employees[0]
    for (let employee of employees) {
        if (employee.salary > highest_paid.salary) {
            highest_paid = employee
        }
    }
    return highest_paid
}

console.log("Highest paid:", highPaid(employees))
