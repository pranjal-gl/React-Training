let form = document.querySelector('.add-contact');
let uname = document.getElementById('fname');
let uemail = document.getElementById('email');
let uphone = document.getElementById('phone');

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    let data = {
        id: Date.now(),
        fname: uname.value,
        email: uemail.value,
        phone: uphone.value
    }
    const url = 'http://localhost:3001/empDetails';
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
})



