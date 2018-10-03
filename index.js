const numbers = [1, 2, 3, 4, 5]
const incValue = 5
const decValue = 2
const mulValue = 3


console.log('Woho, getting started! :)')
console.log('Initinal values in the array: ', numbers)


let incremenet = function incremenetAllBy(numbers, incrementValue) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        result[i] = numbers[i] + incrementValue
    }
    return result
}

function decremenetAllBy(numbers, decrementValue) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        result[i] = numbers[i] - decrementValue
    }
    return result
}

function multipleAllBy(numbers, multipleValue) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        result[i] = numbers[i] * multipleValue
    }
    return result
}

function singleIncrement(current, increment) {
    return current + increment
}


// const incremenets = this.incremenetAllBy(numbers, incValue)
const decrements = this.decremenetAllBy(numbers, decValue)
const multiples = this.multipleAllBy(numbers, mulValue)

console.log('Your output: ')
// console.log(`After increment by ${incValue}.`, incremenets)
console.log(`After decrement by ${decValue}.`, decrements)
console.log(`After multiplication by ${mulValue}.`, multiples)

function myMap(numbers, fn, value) {
    return fn(numbers, value)
}

function singleMap(numbers, fn, value) {
    const res = []
    for (let i = 0; i < numbers.length; i++) {
        res[i] = fn(numbers[i], value)
    }
    return res
}

const icrementMapResult = this.myMap(numbers, incremenet, 5,)
const decrementMapResult = this.myMap(numbers, decremenetAllBy, 5)
const multiplicationMapResult = this.myMap(numbers, multipleAllBy, 5)
const powerMapResult = this.myMap(numbers, Math.pow, 5)
console.log('Using my map:')
console.log('After increment by 5', icrementMapResult)
console.log('After decrement by 5', decrementMapResult)
console.log('After multiplication by 5', multiplicationMapResult)
console.log('After power by 5', multiplicationMapResult)
console.log('-----Single map-----')
console.log('increment by 10: ', this.singleMap(numbers, this.singleIncrement, 10))

const usedNativeMap = numbers.map(n => n * 5)
console.log('Native map result: ', usedNativeMap)
const depricatedMap = numbers.map(function (n) {
    return n * 5
})
console.log('Deprecated map result: ', depricatedMap)