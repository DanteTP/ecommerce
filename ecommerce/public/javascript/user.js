window.onload = () =>{
    let validators =  document.querySelectorAll('.validators')
    let boton = document.querySelectorAll('.menubutton')
    let submenu = document.querySelectorAll('#personales')
    let datahidden = document.querySelectorAll('#data')
    let botones = document.querySelectorAll('#botones')
    let botonh = document.getElementById('datahome')
    let homedata = document.getElementById('datauser')
    let status = document.getElementById('screenstatus')

// Screen msg
    switch(status.value){
        case 'home':
        break
        case 'editsuccess':
        alert('Datos de usuario modificados correctamente')
        break
        case 'editerror':
        submenu[0].classList.remove('hidden')
        homedata.classList.add('hidden')
        for(let e=0;e<datahidden.length;e++){
            if(e!==0){
            datahidden[e].classList.add('hidden')}
        }
        datahidden[0].classList.remove('hidden') 
        break
        case 'passsuccess':
        alert('Contraseña modificada correctamente')
        break
        case 'passerror':
        submenu[0].classList.remove('hidden')
        homedata.classList.add('hidden')
        for(let e=0;e<datahidden.length;e++){
            if(e!==2){
            datahidden[e].classList.add('hidden')}
        }
        datahidden[2].classList.remove('hidden') 
        break
        case 'addsuccess':
            alert('Dirección cargada correctamente')
            break
    }
    

// Menu
    for(let i = 0;i<boton.length;i++){
        boton[i].addEventListener('click',function(){
        submenu[i].classList.toggle('hidden')
        })
    }
    for(let i = 0;i<boton.length;i++){
        boton[i].addEventListener('mouseenter',function(){
        document.body.style.cursor="pointer"
        })
    }
    for(let i = 0;i<boton.length;i++){
        boton[i].addEventListener('mouseleave',function(){
        document.body.style.cursor="default"
        })
    }
    for(let i=0; i<botones.length;i++){
        botones[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"})}

    for(let i=0; i<botones.length;i++){
        botones[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"})}
    
    botonh.addEventListener('mouseenter',function(){
                document.body.style.cursor="pointer"})
            
    botonh.addEventListener('mouseleave',function(){
                document.body.style.cursor="default"})
// Data show up
    for(let i=0; i<botones.length;i++){
        botones[i].addEventListener('click',function(){
            homedata.classList.add('hidden')
            for(let e=0;e<datahidden.length;e++){
                if(e!==i){
                for(let x=0 ; x<validators.length;x++){
                        validators[x].innerHTML=''
                    }
                datahidden[e].classList.add('hidden')}
            }
        datahidden[i].classList.remove('hidden') 
        } )
        }

    botonh.addEventListener('click',function(){
        for(let e=0;e<datahidden.length;e++){
        datahidden[e].classList.add('hidden')
        }
        homedata.classList.remove('hidden')
    })




    // VALIDATION
    let editsubmit = document.getElementById('editsubmit')
    

        // User edit validation
    editsubmit.addEventListener("click",function (event){
    let msg = document.getElementById('alert')    
    let email = document.getElementById('Email')
    let emailpattern = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    
    

    if(emailpattern.test(email.value)){

    }else{
        event.preventDefault()
        msg.innerHTML = `<p style="color: red; font-weight: bold;">Por favor introduzca una dirección de correo válida</p>`
    }})

    let passsubmit = document.getElementById('passsubmit')

        // Password validation
    passsubmit.addEventListener("click",function (event){
        let errors = []      
        let passpattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
        let ppassword = document.getElementById('Password')
        let npassword = document.getElementById('NPassword')
        let rnpassword = document.getElementById('RNPassword')
        
        let msg = document.getElementById('passalert')    


        if(!passpattern.test(npassword.value)){
            errors.push('La nueva contraseña debe tener al menos 8 caracteres; al menos 1 mayúscula + 1 minúscula + 1 número')
        }

        if(ppassword.value == npassword.value){
            errors.push('La contraseña nueva no puede ser igual a la anterior')
        }

        if(npassword.value !== rnpassword.value){
            errors.push('Las contraseñas no coinciden')
        }

        if(errors.length>0){
            msg.innerHTML=''
            event.preventDefault()
            console.log(msg);
            for(let i=0 ; i<errors.length ; i++){
                console.log(errors[i]);
                msg.innerHTML += `<li class="alertlist">${errors[i]}</li>`
            }
        }})
}