const soma = (num1, num2) => {
    return  num1 + num2
}

const multi = (num1, num2) => {
    return num1 * num2
}

const divi = (num1, num2) => {
    return num1 / num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

const num1 = Number(prompt("Digite um número para operações matemáticas"))
const num2 = Number(prompt("Agora um número para calcular"))

console.log(`A Soma é: ${soma(num1, num2)}`)
console.log(`A Multiplicação é: ${multi(num1, num2)}`)
console.log(`A Divisão é: ${divi(num1, num2)}`)
console.log(`A Subtração é: ${sub(num1, num2)}`)
