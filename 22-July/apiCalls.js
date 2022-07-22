function getMethod() {
    fetch("http://localhost:3001/empDetails").then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res);
    });
}
// getMethod();

function postMethod() {
    const url = 'http://localhost:3001/empDetails'
    let data = {
        id: 5,
        fname: "Harward",
        email: "harward@gmail.com",
        city: "Delhi"
    }

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res);
    });
}
postMethod();

function putMethod() {
    const url = 'http://localhost:3001/empDetails/6'
    let data = {
        id:6,
        fname: "Jenny",
        email: "jennynew@gmail.com",
        city: "Mumbai"
    }

    fetch(url, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res);
    });
}
// putMethod();

function patchMethod() {
    const url = 'http://localhost:3001/empDetails/5'
    let data = {
        city: "Mumbai"
    }

    fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res);
    });
}
// patchMethod();

function deleteMethod() {
    const url = 'http://localhost:3001/empDetails/5'
    fetch(url, {
        method: 'DELETE',
    }).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res);
    });
}
// deleteMethod();