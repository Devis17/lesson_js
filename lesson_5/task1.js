evenCount = 0
oddCount = 0
// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 1000 + 1)
    if (randomNumber % 2 === 0) {
        evenCount++;
    } else {
        oddCount++
    }
}
let resultMesseng = `парних чисел ${evenCount} <br> не парних чисел ${oddCount} <br>`
if (evenCount > oddCount) {
    resultMesseng += "Парних чисел більше"
} else if (oddCount > evenCount) {
    resultMesseng += "непарних чисел більше"
} else {
    resultMesseng += "парних і непарних чисел однаково "
}

document.write(`${resultMesseng}`)

