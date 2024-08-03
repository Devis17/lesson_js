//  клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не 
// вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то 
// пропонуємо купити лотерею за 4 грн.


let goodsPrice = parseFloat(prompt("Введіть ціну товару"))
let goodsPriceTwo = parseFloat(prompt("Скільки ви маєте грошей?"))
let subtraction = goodsPriceTwo - goodsPrice

if (goodsPriceTwo >= goodsPrice) {
    alert("Дякуємо за покупку");
    const ticket = 4;
    if (subtraction >= ticket) {
        alert("Чи бажаєте ви купити лотерею за 4 грн?");
    } else {
        alert("Вибачте, у вас не достатньо коштів на лоторею.");
    }
} else {
    alert("Вибачте, у вас не достатньо коштів на покупку товару.");
}

