// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.

let day = parseInt(prompt("Введіть номер дня тижня"))

const monday = 1
const tuesday = 2
const wednesday = 3
const thursday = 4
const friday = 5
const saturday = 6
const sunday = 7

if (day === monday) {
    alert("Понеділок")
} else if (day === tuesday) {
    alert("Вівторок")
} else if (day === wednesday) {
    alert("Середа")
} else if (day === thursday) {
    alert("Четверг")
} else if (day === friday) {
    alert("Пятниця")
} else if (day === saturday) {
    alert("Субота")
} else if (day === sunday) {
    alert("Час відпочити")
} else
    alert("Немає такого дня тижня")