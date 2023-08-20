
let myArray = [4 ,5, 7, 8, 9, 1]
console.log(myArray)
myArray[2]=6;
console.log(myArray)
myArray.splice(2 ,1 ,7 ,8);
console.log(myArray)
//console.log(myArray.length)
//myArray.push(7)
//console.log(myArray)
//myArray.pop()
//console.log(myArray)
myArray.shift()
console.log(myArray)
let dog = {
    name:'Alaska',
    age: 4
}
dog.name = 'Chihuahua'
dog.action = 'Walk'
delete ( dog.action )
console.log(dog);
let cat = new Object({
    name: 'Tom ',
    age : 3,
    enemy: {
        name: 'Alaska',
        age : 5
    }
}
)
console.log(cat)
let dog1 = ["Alaska",4]
let dog2 = ["Corgi", 5]
let dogs = [dog1 , dog2]
console.log(dogs)
console.log (dogs[0][0])
    
let i=0
let giotraicay = [['xoai',2],['dua hau',3]]
for(let i = 0;i++;i<giotraicay.length){ "giỏ trái cây" + console.log (giotraicay[i][0]) + console.log (giotraicay[i][1])  }