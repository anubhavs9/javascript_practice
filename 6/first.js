var age = prompt("Enter age: ")
var citizenship = ''
while(citizenship == '' || (citizenship != 'yes' && citizenship != 'no')){
    citizenship = prompt("Do you have citizenship (yes/no) ?: ")
}

if(age >= 18 && citizenship == 'yes'){
    document.getElementById("my_output").innerHTML = "<h2>You are eligible to vote!</h2>"
}
else{
    document.getElementById("my_output").innerHTML = "<h2>You are NOT eligible to vote!</h2>"
}