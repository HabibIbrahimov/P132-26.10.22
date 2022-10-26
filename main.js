

const obj = {
    name: "Rakif",
    surname: "Ramazanov",
    age: 25,
    hasJob: true,
}

// const name = obj.name
// const surname = obj.surname
// const age = obj.age

const { name, surname, age } = obj

const getSum = (x, y, ...rest) => {
    console.log(x, y, rest)
    // return x + y
}

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8, 9]
const newArr = [1, 2, 3, ...arr1, ...arr2, 7, 8, 9, 6, 4]


const result = getSum(4, 5, 6, 7, 8, 9, 2345)
// console.log({ result })

const objKeys = Object.keys(obj)
const objValues = Object.values(obj)
const objEntries = Object.entries(obj)




// every some includes filter find map foreach indexOf reduce

// butun elementlerin musbet olub olmamasi
// const everyData = arr.every((item) => item > 0)

// // her hansi elementin menfi olmasi
// const someVal = arr.some((item) => item < 0)

// // axtardigimiz elementin arrayda olub olmamasi
// let val = 5
// const hasVal = arr.includes(val)

// // cut ededlerin filter olunmasi
// const filterData = arr.filter((item) => item % 2 === 0)

// // 0 elementinin arrayda tapilmasi
// const findVal = arr.find((item) => item === 0)

// // map ile dovr edib elementleri 2 e vur
// const mappedData = arr.map((item) => item * 2)

// // foreach ile dovr edib ekranda goster
// const loopData = arr.forEach((item) => console.log(item))

// // axtardigin elementin indexini tap
// const index = arr.indexOf(0)

// array icinde butun elementleri topla
const arr = [1, 2, 3, 2, 1, -1, 5, 0]

// const reduceData = arr.reduce((item, arr, index) => console.log({ item, arr, index }))

//  arr[index]

// const data= arr.filter((item)=>item===0)



// formumuz var 5 inputdan ibaret

// buttona klik olanda 

// const data=new Student(name,surname,age)