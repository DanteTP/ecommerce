window.onload = ()=>{
        let loginsubmit = document.getElementById('loginsubmit')
        let cookiecheck = document.getElementById('checkbox')
        let cookielabel = document.getElementById('checklabel')

        if(sessionStorage.getItem('cookie')=='rechazada'){
            cookiecheck.classList.add('hidden')
            cookielabel.classList.add('hidden')
        }
    
        
        // Login validation
        loginsubmit.addEventListener("click",function (event){
        let msg = document.getElementById('alert')    
        let email = document.getElementById('EmailL')
        let password = document.getElementById('PasswordL')
        let passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        let emailpattern = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;

        if( (emailpattern.test(email.value) && passpattern.test(password.value)) && password.value.length>7){
        }else {
            event.preventDefault()
            msg.innerHTML = `<p style="color: red; font-weight: bold;">Usuario y/o contraseña incorrecto</p>`
    }})      
}