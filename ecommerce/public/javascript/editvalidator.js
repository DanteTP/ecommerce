window.onload = ()=>{
    let editsubmit = document.getElementById('editsubmit')
    

    // User edit validation
    editsubmit.addEventListener("click",function (event){
    let msg = document.getElementById('alert')    
    let email = document.getElementById('EmailL')
    let emailpattern = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

    if(!emailpattern.test(email.value)){
        event.preventDefault()
        msg.innerHTML = `<p style="color: red; font-weight: bold;">Por favor introduzca una dirección de correo válida</p>`
    }})

    let passsubmit = document.getElementById('passsubmit')

    // Login validation
    regsubmit.addEventListener("submit",function (event){
        let passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        let ppassword = document.getElementById('Password')
        let npassword = document.getElementById('NPassword')
        let rnpassword = document.getElementById('RNPassword')
        let errors = []
        let msg = document.getElementById('alert')    

        if(!passpattern.test(ppassword.value)){
            errors.push('La contraseña debe tener al menos 8 caracteres; al menos 1 mayúscula + 1 minúscula + 1 número')
        }

        if(!passpattern.test(npassword.value)){
            errors.push('La nueva contraseña debe tener al menos 8 caracteres; al menos 1 mayúscula + 1 minúscula + 1 número')
        }

        if(ppassword.value !== npassword.value){
            errors.push('La contraseña nueva no puede ser igual a la anterior')
        }

        if(npassword.value !== rnpassword.value){
            errors.push('Las contraseñas no coinciden')
        }

        if(errors.length>0){
            event.preventDefault()

            for(let i=0 ; i<errors.length ; i++){
                console.log(errors[i]);
                msg.innerHTML += `<li class="alertlist">${errors[i]}</li>`
            }
        }})

}