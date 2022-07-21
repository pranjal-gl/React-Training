fetch("http://localhost:3001/empDetails").then((res)=>{
    return res.json()
}).then((res)=>{
    console.log(getUserDetails(res, "sheldon@gmail.com"));
    console.log(getUsersFromCity(res, "Delhi"));
});

function getUserDetails(response, email) {
    let newRes;
    response.forEach(user => {
        if(user.email == email) {
            newRes = user;
        }
    });
    return newRes;
}

function getUsersFromCity(response, city) {
    let usersFromSameCity = [];
    response.forEach(user => {
        if(user.city == city) {
            usersFromSameCity.push(user);
        }
    });
    return usersFromSameCity;
}