/*console.log('inicio')
setTimeout(() => {
    console.log('ola')
},2000)
console.log('fim')*/

const arr = [1,2,3,4]
const print =num=> console.log('Num', num)
const dobro = num=> num * 2 -1
arr.forEach(print)
arr.map(dobro).forEach(print)