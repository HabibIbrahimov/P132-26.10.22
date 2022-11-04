// console.log('start')


// const func = () => {
//     console.log('Set timeout inside of func')
// }
// setTimeout(func(), 1000)

// setTimeout(() => {
//     console.log("Set timeout 0")
// }, 0)

// setTimeout(() => {
//     console.log("Set timeout 2")
// }, 2000)



// console.log('end')

// let promise = new Promise((resolve, reject) => {
//     let x = 5 + 3

//     if (x === 8) {
//         resolve("Success")
//     }

//     else {
//         reject("Error")
//     }
// })

// promise.then()


const cards = document.querySelector('.cards')
const button = document.getElementById('btn')
const fetchData = async () => {
    const getData = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
            data?.map((item) => {
                cards.innerHTML += `
            <div>
            <div class="item">
                ${item.title}
            </div>
            <div class="item">
                ${item.completed}              
            </div>
          </div>
            `
            })
        })
    return getData;
}
button.addEventListener("click", fetchData)

const remove = (nums, val) => {
    return nums.filter((num) => num !== val)
}