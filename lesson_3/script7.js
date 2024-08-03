// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься

let numberMonth = parseInt(prompt("Введіть номер місяця"))
if (numberMonth <= 0 || numberMonth > 12)
    alert("Введіть корректне значення")
else if (numberMonth >= 3 && numberMonth <= 5) {
    alert("Весна")
} else if (numberMonth >= 6 && numberMonth <= 8) {
    alert("Літо")
} else if (numberMonth >= 9 && numberMonth <= 11) {
    alert("Осінь")
} else
    alert("Зима")