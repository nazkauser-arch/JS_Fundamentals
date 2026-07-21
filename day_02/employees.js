const employees = [
  { id: 1, name: "Ali", department: "Engineering", salary: 90000 },
  { id: 2, name: "Sara", department: "Design", salary: 75000 },
  { id: 3, name: "Ahmed", department: "Engineering", salary: 110000 },
  { id: 4, name: "Zara", department: "Design", salary: 85000 },
  { id: 5, name: "Usman", department: "Sales", salary: 70000 }
];

//Return the names of all employees
let arrName = []
for (let i of employees){
    arrName.push(i.name)
}
console.log("Employee Names are: ", arrName)

//using map()
arrName = employees.map(employee => employee.name)
console.log("Employee Names are: ", arrName)

//Return employees earning more than 80,000
for (let j of employees){

}
