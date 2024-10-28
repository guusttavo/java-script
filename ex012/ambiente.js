let num = [5,7,8,9,10]
num.sort()
num.push(7)
console.log(num)
console.log(`O vetor tem ${num.length} posiçoões`)
console.log(`Nosso vetor é o ${num[0]}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
}else {
    console.log(`o valor está na posição ${pos}`)
}