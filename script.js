 // Crie um array que receba 5 itens e exiba no console.
const frutas = ["morango","banana", "maça", "acerola", "ameixa"]
console.log(frutas)

// Utilize um método para adicionar um nome ao inicio do array.
frutas.unshift("mamão")
console.log(frutas)

// Utilize um método para remover o último nome do array.
frutas.splice(5,1)
console.log(frutas)
//ou
frutas.pop()
console.log(frutas)

// Utilize um método para adicionar dois nomes ao fim do array.
frutas.push("amora","abacaxi")
console.log(frutas)

// Utilize um método para remover o prime((iro nome do array.
frutas.splice(0,1)
console.log(frutas)

//ou
frutas.shift()
console.log(frutas)

// Utilize um método para organizar em ordem crescente o seguinte array:
const numbers = [7,5,6,3,8,9,2,1,4]
    numbers.sort(
       function (a,b) {
        return (a-b)
       }
    )
console.log(numbers)