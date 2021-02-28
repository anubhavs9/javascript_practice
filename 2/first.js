var Thing = prompt("Enter a thing name: ")
var Meal = prompt("Enter a meal name(breakfast/lunch/dinner): ")

var out = "Rosed are Red. Violets are Blue </br>"
out += Thing + " are cheaper.  </br>"
out += "than a  " + Meal + " for two."

document.getElementById("out").innerHTML = out;