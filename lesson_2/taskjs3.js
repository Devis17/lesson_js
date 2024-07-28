let price = parseFloat(prompt('Введіть вартість одиниці товару: грн.', '0'))

let article = parseInt(prompt('Введіть кількість товару'))

let totalPrice = (price * article)

let interest = ((totalPrice / 100) * 5)

document.write(`
    <table>
    <tr>
      <th>Загальна вартість:</th>
      <td>${totalPrice} грн </td>
    </tr>
    <tr>
      <th>ПДВ(5% від загальної вартості):</th>
      <td>${interest} грн </td>
    </tr>
    </table>`)