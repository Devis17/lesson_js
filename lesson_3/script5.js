// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий
//автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного
// засобу, яким він може керувати.

let categoryDrive = prompt("Введіть категорію, A, B, C")

const moto = "a"
const car = "b"
const truck = "c"

if (categoryDrive === moto) {
    alert("Мотоцикл")
} else if (categoryDrive === car) {
    alert("Легковий автомобіль")
} else if (categoryDrive === truck) {
    alert("Вантажівка")
} else
    alert("немає такої категорії")