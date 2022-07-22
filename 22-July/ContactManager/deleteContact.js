let formID = document.querySelector('.deleteForm');
let uid =  document.getElementById('id');

formID.addEventListener('submit', (event)=>{
    event.preventDefault();
    let id = uid.value;
    const url = `http://localhost:3001/empDetails/${id}`;
    fetch(url, {
        method: 'DELETE'
    }).then((res)=>{
        return res.json();
    }).then((res)=>{
        console.log(res);
    })
});