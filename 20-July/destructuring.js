// function greetUser(username) {
//     console.log(`Hello ${username} !`);
// }
// greetUser("Pranjal")

// Default params
// function greetUser(username="Guest") {
//     console.log(`Hello ${username} !`);
// }
// greetUser("Pranjal");
// greetUser();

//Passing Objectts as param


// function greetUser(userDetails) {
//     console.log(`This is ${userDetails.fname}, Email id: ${userDetails.email}, works as a ${userDetails.profession} in ${userDetails.address}`);
// }
// let userDetails = {
//     fname: "Dr. Sheldon Cooper",
//     email: "sheldon@gmail.com",
//     profession: "Scientist",
//     address: "Texas"
// }
// greetUser(userDetails);

// Using the concept of Destructuring
function greetUser(userDetails) {
    let {fname, email, profession, address} = userDetails;
    console.log(`This is ${fname}, Email id: ${email}, works as a ${profession} in ${address}`);
}
let userDetails = {
    fname: "Dr. Sheldon Cooper",
    email: "sheldon@gmail.com",
    profession: "Scientist",
    address: "Texas"
}
greetUser(userDetails);