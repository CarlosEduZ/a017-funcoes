//A

// const soma = (num1, num2) => {
//     return num1 + num2
// }
// console.log(soma(13,10))

//B

// function numeros(num1, num2){
//     let booleano 
//     if (num1 >= num2) {
//         booleano = true
        
//     } else {
//         booleano = false
//     }
//     return booleano
// }
// console.log(numeros(10,9))


//C

function par(num1){
    if (num1 %2 === 0) {
      return console.log("O número é par")
    } else {
       return console.log("O número é impar")
    }
}
par(2)

//D

const mensagem = (frase) => {
    console.log(`O tamanho da mensagem é ${frase.length} e maiúsculo fica ${frase.toUpperCase()}`)
}
mensagem("Tamanho é este")