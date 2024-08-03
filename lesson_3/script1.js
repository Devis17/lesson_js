//З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести
// не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що
// кількість однакова.

let childrenName = prompt("Введіть імя першої дитини", "Василя")
let numbersSweet = parseInt(prompt("Введіть кількість цукерок в першої дитини", "2"))

let childrenNameTwo = prompt("Введіть імя другої  дитини", "Петра")
let numbersSweetTwo = parseInt(prompt("Введіть кількість цукерок в другої дитини", "2"))

if (numbersSweet > numbersSweetTwo)
    alert(`Цукерок більше у ${childrenName}`)
else if (numbersSweetTwo > numbersSweet)
    alert(`Більше цукерок у ${childrenNameTwo}`)
else
    alert(`Цукерок рівно`)


