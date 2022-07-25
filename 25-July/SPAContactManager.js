let contactContainer = document.querySelector('.contact-container');
let form = document.querySelector('.user-form');
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
        location.reload();
        console.log(res);
    });
})




function getContacts() {
    let url = `http://localhost:3001/empDetails`;
    fetch(url).then((res)=> {
        return res.json();
    }).then((data)=>{
        generateUI(data);
    }).catch((err)=>{
        console.log(err);
    })
}

function generateUI(data) {
    let content = ``;
    data.forEach(element => {
        content = content + `
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                    <h3>${element.fname}</h3>
                    <p>${element.email}</p>
                    <p>${element.phone}</p>

                    <button onclick="deleteData(${element.id})">Delete</button>
                </div>
            </div>
        </div>
        `
    });
    contactContainer.innerHTML = content;
}  

getContacts();

function deleteData(id) {
    const url = `http://localhost:3001/empDetails/${id}`;
    fetch(url, {
        method: 'DELETE'
    }).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res);
        location.reload();
    })
}
