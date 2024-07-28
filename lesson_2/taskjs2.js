let ege = parseInt(prompt("Введіть рік народженя '1988''"))

const years = 2024

let result = years - ege

document.write(`
    <table>
    <tr>
      <th>Дата народження:</th>
      <td>${ege}</td>
    </tr>
    <tr>
      <th>Поточний рік:</th>
      <td>${years}</td>
    </tr>
    <tr>
      <th>Вік:</th>
      <td>${result}</td>
    </tr>
    </table>`)
