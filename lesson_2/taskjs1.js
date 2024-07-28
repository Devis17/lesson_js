
let num1 = parseFloat(prompt("Веддіть перше дійсне число"))

let num2 = parseFloat(prompt("Веддіть друге дійсне число"))

let plus = num1 + num2
let multiplication = num1 * num2
let divide = num1 / num2

document.write(`
    <h1>Результат обчислення значення виразів у таблиці</h1>
    <table border="2px">
      <tr>
        <th>Переше число: ${num1}</th>
        <th>Друге число: ${num2}</th>
      </tr>
    <tr>
        <th>Шуканий результат</th>
        <th>Отримане значення</th>
    </tr>
    <tr>
        <th>Сума</th>
        <td>${plus}</td>
      </tr>
      <tr>
        <th>Добуток</th>
        <td>${multiplication}</td>
      </tr>
      <tr>
        <th>Частка</th>
        <td>${divide}</td>
      </tr>
    </table>
  `);
