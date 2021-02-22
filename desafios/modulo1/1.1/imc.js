
// Programa para calcular IMC baseada nas variáveis abaixo!

const name = "Tiago"
const weight = 110 // em quilos 
const height = 1.78 // em metros
const bmi = weight / (height * height)

if (bmi >= 30) {
    console.log(`${name}, você está acima do peso!`)
} else if (bmi < 29.9) {
    console.log(`${name}, você não está acima do peso!`)
}