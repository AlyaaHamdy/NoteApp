const car={
    name:'BMW',
    color:'Black'
}
console.log(car.name)
console.log(car)



// const fs =require('fs')
// fs.
const person={
    name:'Alyaa',
    age:25
}
console.log(person.name)
console.log(person)

/////////////////convert object to json

const perJson = JSON.stringify(person)
console.log(perJson)

const fs =require('fs')
fs.writeFileSync('test.json',perJson)
console.log(fs.readFileSync('test.json').toString())

////////////convert json to object

const perObject = JSON.parse(perJson)
console.log(perObject)

perObject.name = 'Ola'
perObject.age = '30'


fs.writeFileSync('test.json',JSON.stringify(perObject))


