let i= 10
i =20
i = i + 10 /4 * 4

const k = 10

console.log(i)
//----------------------------------------------------------------------------
//pure function(depende das suas entradas apenas para gerar o retrorno)
function multiplicacao(num1, num2){
    return (num1 * num2)
}

//---------------------------------------------------------------------------
// arrow functions
const soma = (num1, num2) =>  num1 + num2
const sub = (num1, num2) =>  num1 - num2
const operacao = (op, num1, num2) => op(num1, num2)


//console.log('soma', soma(10,20), operacao(sub, 10,30), operacao(soma, 11,11))
console.log('soma', operacao(soma, 111,111))
console.log('subtracao', operacao(sub, 100, 50))
//teste de mais integracao
console.log('soma de 2 numeros', operacao(soma, 10, 11))