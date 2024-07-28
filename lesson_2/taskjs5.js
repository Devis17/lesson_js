let sec = parseInt(prompt("Введіть кількість секунд"))

let minets = Math.floor(sec / 60)
let hours = Math.floor(minets / 60)

document.write(`Секунди ${sec} <br> хвилини ${minets} <br> години ${hours}`)