var salaryByWeek = 1200
var output = ''

output = "Weekly salary: " + salaryByWeek
var salaryByYear = salaryByWeek * 52
output += "</br>Yearly Salary: " + salaryByYear
var salaryByMonth = salaryByYear/12
output += "</br>Monthly Salary: " + salaryByMonth

document.getElementById("my_output").innerHTML = output