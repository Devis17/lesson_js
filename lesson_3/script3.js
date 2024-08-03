//Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

let randomNumber = Math.floor(Math.random() * 5 + 1)

let attempOne = parseInt(prompt("Введіть спробу номер 1"))
if (attempOne === randomNumber)
    alert("Вітаємо ви виграли число було " + randomNumber)
else if (attempOne != randomNumber) {
    alert("Ви не вгадали. Cпробуйте ще раз, було число  " + randomNumber)
    let attempTwo = parseInt(prompt("Введіть спробу номер 2"))
    if (attempTwo === randomNumber) {
        alert("Вітаємо! ви вгадали з другої спроби. Було число " + randomNumber)
    }
    else
        alert("Ви не вгадали. Число було: " + randomNumber + ". У вас більше немає спроб.")
}

