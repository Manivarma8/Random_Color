// var boxes = document.querySelectorAll(".boxer1");
// const elementsArray = Array.from(boxes);
// elementsArray.Map(element => {
// alert("hi")
// })


const vijay = [
    {id : 1, name : 'Manivarman', age : 27},
    {id : 2, name : "Vijay", age : 27},
    {id : 3, name : "Surendran", age : 67},
    {id : 4, name : "Bhuvaneswari", age : 58}
];

const mani = vijay.map(record=> {
    record.name 
})
console.log(mani);



const users = [
    { id: 1, name: 'Alice', age: 28, isActive: true },
    { id: 2, name: 'Bob', age: 34, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true },
    { id: 4, name: 'Dave', age: 45, isActive: false }
];

// Use filter to get all active users

const activeUserNames = users.map(user => user.name);

console.log('Active User Names:', activeUserNames);
// Output: Active User Names: ['Alice', 'Charlie']

// Use forEach to log the name of each active user
activeUserNames.forEach(name => {
    console.log(name);
});
// Output:
// Alice
// Charlie
