let formName = document.querySelector('.search-using-name');
let formID = document.querySelector('.search-using-ID');

let uname = document.getElementById('uName');
let uid =  document.getElementById('uID');

let contactContainer = document.querySelector('.contact-container');

formName.addEventListener('submit', (event)=>{
    event.preventDefault();
    let fname = uname.value;
    const url = `http://localhost:3001/empDetails?fname=${fname}`;
    fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        generateUI(res);
    })
});
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
                </div>
            </div>
        </div>
        `
    });
    contactContainer.innerHTML = content;
} 


formID.addEventListener('submit', (event)=>{
    event.preventDefault();
    let id = uid.value;
    const url = `http://localhost:3001/empDetails/${id}`;
    fetch(url).then((res)=>{
        return res.json();
    }).then((res)=>{
        generateUIByID(res);
    })
});
function generateUIByID(data) {
    contactContainer.innerHTML = `<div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h3>${data.fname}</h3>
        <p>${data.email}</p>
        <p>${data.phone}</p>
      </div>
    </div>
    </div>`
}  