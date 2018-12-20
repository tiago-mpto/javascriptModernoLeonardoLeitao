const escola = "Cod3r"

//retorna o caracter do indice indicado
console.log(escola.charAt(4))

//retorna o codigo do indice na tabela unicode ou asc
console.log(escola.charCodeAt(3))

//retorna qual nº do indice do carcter passado na String
console.log(escola.indexOf('d'))

//retorna a string menos a quantidade de caracter passado a partir do indice 0
console.log(escola.substring(1))

//retorna os caracteres entre os indices 0 e 3 sem contar o 3
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))

//altera um numero ou string passado no 1º parametro pelo o que esta sem passado no 2º
console.log(escola.replace(3, 'e'))

//retorna um array a partir de um separador definido
console.log('Ana, Maria, Pedro'.split(','))
