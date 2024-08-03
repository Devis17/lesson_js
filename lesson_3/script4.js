// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у
//садочку, школярем, студентом, працівником, пенсіонером).

let humanAge = parseFloat(prompt("Введіть ваш вік"))



if (humanAge < 6) {
    alert("Садок")
} else if (humanAge < 17) {
    alert("Школа")
} else if (humanAge < 25) {
    alert("Навчання")
} else if (humanAge < 60) {
    alert("працівник")
} else
    alert("Пенсіонер")
