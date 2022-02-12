window.onload = ()=>{
    let regsubmit = document.getElementById('regsubmit')
    // Login validation
    regsubmit.addEventListener("click",function (event){
        let name = document.getElementById('Name')
        let surname = document.getElementById('Surname')
        let email = document.getElementById('Email')
        let passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        let emailpattern = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
        let password = document.getElementById('Password')
        let rpassword = document.getElementById('RPassword')
        let errors = []

        // alert msg
        let alert = document.getElementById('alert')


        if(name.value.trim().length<1){
            errors.push('Introduzca su nombre')
        }
        if(surname.value.trim().length<1){
            errors.push('Introduzca su Apellido')
        }
        if(!emailpattern.test(email.value)){
            errors.push('Introduzca un correo electrónico válido')
        }
        if(!passpattern.test(password.value)){
            errors.push('La contraseña debe tener al menos 8 caracteres; al menos 1 mayúscula + 1 minúscula + 1 número')
        }
        if(password.value !== rpassword.value){
            errors.push('Las contraseñas no coinciden')
        }

        if(errors.length>0){
            alert.innerHTML=''
            event.preventDefault()
            for(let i=0 ; i<errors.length ; i++){
                console.log(errors[i]);
                alert.innerHTML += `<li class="alertlist">${errors[i]}</li>`
            }
        }


})    }  
