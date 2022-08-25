const button = document.querySelector('.form-button');
const nombre = document.querySelector('.input-name');
const pass = document.querySelector('.input-pass');

button.addEventListener("click", ()=>{
    if(nombre.value != "" && pass.value != ""){
        button.setAttribute("href","index.html");
    }else{
        button.setAttribute("href","#");
        alert("Complete los campos");
    }
})