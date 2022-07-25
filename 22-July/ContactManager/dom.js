let contactContainer = document.querySelector('.contact-container');

// Only one contact at a time

// console.log(contactContainer);
// function getContacts(index) {
//     let url = `http://localhost:3001/empDetails/${index}`;
//     fetch(url).then((res)=> {
//         return res.json();
//     }).then((data)=>{
//         generateUI(data);
//     }).catch((err)=>{
//         console.log(err);
//     })
// }

// function generateUI(data) {
//     contactContainer.innerHTML = `<div class="col-sm-6">
//     <div class="card">
//       <div class="card-body">
//         <h3>${data.fname}</h3>
//         <p>${data.email}</p>
//         <p>${data.city}</p>
//         <button>delete</button>
//       </div>
//     </div>
//     </div>`
// }  


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
    // content = content + 'a';
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
    // console.log(content);
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
