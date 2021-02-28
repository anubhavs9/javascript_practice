while(true){
    var grade = prompt("Enter grade: ")
    switch(grade){
        case 'A':
        case 'a':
            document.getElementById("my_output").innerHTML = "<h1>Great Job!</h1>"
            break;
        case 'B':
        case 'b':
            document.getElementById("my_output").innerHTML = "<h1>Good Job! ALmost there!</h1>"
            break;
        case 'C':
        case 'c':
            document.getElementById("my_output").innerHTML = "<h1>Passed!</h1>"
            break;
        case 'D':
        case 'd':
            document.getElementById("my_output").innerHTML = "<h1>Need improvement!</h1>"
            break;
        case 'F':
        case 'f':
            document.getElementById("my_output").innerHTML = "<h1>Failed!</h1>"
            break;
        default:
            alert("Invalid input grade! Try Again")
            continue
    }
    break
}