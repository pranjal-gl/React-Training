let contactContainer = document.querySelector('.contact-container');
let form = document.querySelector('.user-form');
let uname = document.getElementById('fname');
let uemail = document.getElementById('email');
let uphone = document.getElementById('phone');

let updateID;
function getVal(id) {
    updateID = id;
}

// ADDING NEW CONTACT
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if (event.submitter.id == 'add') {
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
    } else {
        updateData(updateID);
    }
    
})

// RENDERING ALL CONTACT
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
                    <button onclick="editData(${element.id})">Edit</button>
                </div>
            </div>
        </div>
        `
    });
    contactContainer.innerHTML = content;
}  

getContacts();

// DELETE CONTACT
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

// EDIT CONTACT
function editData(id) {
    getVal(id);
    const url = `http://localhost:3001/empDetails/${id}`;
    fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        // console.log(res);
        document.getElementById("fname").value = res.fname;
        document.getElementById("email").value = res.email;
        document.getElementById("phone").value = res.phone;

        
    })
}

function updateData(id) {
    const url = `http://localhost:3001/empDetails/${id}`;
    let data = {
        fname: uname.value,
        email: uemail.value,
        phone: uphone.value
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
        location.reload();
        console.log(res);
    });
}