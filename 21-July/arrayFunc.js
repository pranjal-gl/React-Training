// MAP FIND FILTER
// let arr = ["Sheldon", "Raj", "Lenord", "Harward", "Penny"];

// arr.forEach((names)=>{
//     console.log(names);
// });

// console.log(arr.map((item)=>{
//    return 'Dr.' + item;
// }));

let user = [
    {
        fname: "Sheldon",
        work: "Scientist",
        prof: "Physicist"
    }, 
    {
        fname: "Raj",
        work: "Scientist",
        prof: "Astronomical"
    }, 
    {
        fname: "Lenord",
        work: "Scientist",
        prof: "Applied Physics"
    }, 
    {
        frame: "Harward",
        work: "Engineer",
        prof: "Astronaut"
    }, 
    {
        fname: "Penny",
        work: "Cook",
        prof: "Cheese cake"
    }
]

console.log(
    user.filter((item)=> {
        item.fname == "Sheldon"
    })
);
