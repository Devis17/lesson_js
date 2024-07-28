let productOne = parseInt(prompt("Введіть кількість першого товару"))
let productTwo = parseInt(prompt("Введіть кількість другого довару"))
let productThree = parseInt(prompt("Введіть кількість третього товару"))

let priceOne = parseFloat(prompt("Введіть ціну першого товару"))
let priceTwo = parseFloat(prompt("Введіть ціну другого товару"))
let priceThree = parseFloat(prompt("Введіть ціну третього товару"))

let result = productOne * priceOne
let resultTwo = productTwo * priceTwo
let resultThree = productThree * priceThree

let together = result + resultTwo + resultThree

document.write(`<table style="border: 2px solid#231235;">
        <tr>
            <th style="border: 2px solid #232123;">Загальна вартість першого товару</th>
            <td style="border: 2px solid #232123;">${result}</td>
        </tr>
        <tr>
            <th style="border: 2px solid #232123;">Загальна вартість другого товару</th>
            <td style="border: 2px solid #232123;">${resultTwo}</td>
        </tr>
        <tr>
            <th style="border: 2px solid #232123;">Загальна вартість третього товару</th>
            <td style="border: 2px solid #232123;">${resultThree}</td>
        </tr>
        <tr>
            <th style="border: 2px solid #232123;">Чек</th>
            <td style="border: 2px solid #232123;">${together}</td>
        </tr>
    </table>`)







