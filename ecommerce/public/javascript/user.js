
window.onload = () =>{
    let validators =  document.querySelectorAll('.validators')
    let boton = document.querySelectorAll('.menubutton')
    let submenu = document.querySelectorAll('#personales')
    let datahidden = document.querySelectorAll('#data')
    let botones = document.querySelectorAll('#botones')
    let botonh = document.getElementById('datahome')
    let homedata = document.getElementById('datauser')
    let status = document.getElementById('screenstatus')
    let editbutton = document.querySelectorAll('#editbutton')
    let addaddress = document.getElementById('addaddress')
    let provselect = document.getElementById('Provselect')
    let Cityselect = document.getElementById('Cityselect')
    let imgbutton = document.getElementById('imgbutton')
    let imgform = document.getElementById('imgform')
    let imgbuttoncontainer = document.getElementById('imgbuttoncontainer')
    let userimginput = document.getElementById('userimginput')
    let userimg = document.getElementById('userimg')

    console.log(userimginput.files);

    imgbutton.addEventListener('click',function(e){
        e.preventDefault()
        imgbutton.classList.add('hidden')
        imgform.classList.remove('hidden')
        console.log(userimginput);
    })

    userimginput.addEventListener('change',function(){
        let imagen = userimginput.files
        console.log(imagen[0]);
        const objectURL = URL.createObjectURL(imagen[0]);
        userimg.src=objectURL
    })



    // API PROVINCES ADD ADDRESS
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
    .then(response => response.json())
    .then(data => {
        for(let i=0 ; i<data.provincias.length ; i++){
           provselect.innerHTML+=`<option value="${data.provincias[i].nombre}">${data.provincias[i].nombre}</option>`
        }
        Cityselect.innerHTML='<option value="">Por favor selecciona una ciudad</option>'
        })
    provselect.addEventListener('change',function(){
        fetch('https://apis.datos.gob.ar/georef/api/localidades?provincia='+provselect.value+'&max=5000')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.localidades.length; i++) {
                Cityselect.innerHTML+=`<option value="${data.localidades[i].nombre}">${data.localidades[i].nombre}</option>`
                        }
        })
    })
 
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
        case 'adderror':
        submenu[0].classList.remove('hidden')
        homedata.classList.add('hidden')
        editdata.classList.add('hidden')
        for(let e=0;e<datahidden.length;e++){
            if(e!==1){
            datahidden[e].classList.add('hidden')}
        }
        datahidden[1].classList.remove('hidden') 
        document.getElementById('cardinfo').classList.add('hidden')
        document.getElementById('addadresscard').classList.remove('hidden')
            break    
        case 'addsuccess':
            submenu[0].classList.remove('hidden')
            homedata.classList.add('hidden')
            editdata.classList.add('hidden')
            for(let e=0;e<datahidden.length;e++){
                if(e!==1){
                datahidden[e].classList.add('hidden')}
            }
            datahidden[1].classList.remove('hidden') 
            break
        case 'editaddresssucc':
        submenu[0].classList.remove('hidden')
        homedata.classList.add('hidden')
        editdata.classList.add('hidden')
        for(let e=0;e<datahidden.length;e++){
            if(e!==1){
            datahidden[e].classList.add('hidden')}
        }
        datahidden[1].classList.remove('hidden') 
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

    addaddress.addEventListener('click',function(e){
        e.preventDefault()
        document.getElementById('Address').value=''
        document.getElementById('Zip_Code').value=''
        document.getElementById('cardinfo').classList.add('hidden')
        document.getElementById('addadresscard').classList.remove('hidden')
    })
    botones[1].addEventListener('click',function (event) {
        document.getElementById('cardinfo').classList.remove('hidden')
        document.getElementById('addadresscard').classList.add('hidden')
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
        // New address validation
        let newaddress = document.getElementById('newaddress')
        newaddress.addEventListener("click",function (event){
        let errors = []      
        let msg = document.getElementById('addalert')    
        let Address =  document.getElementById('Address')
        let Zip_Code= document.getElementById('Zip_Code')
        let zippattern = /[1-9]/g
        if(Address.value.length<2){
            errors.push('Por favor introduce una dirección válida')
        }
        if(!zippattern.test(Zip_Code.value)){
            errors.push('Introduce un codigo postal válido')
        }
        if(errors.length>0){
            msg.innerHTML=''
            event.preventDefault()
            console.log(msg);
            for(let i=0 ; i<errors.length ; i++){
                msg.innerHTML += `<li class="alertlist">${errors[i]}</li>`
            }
        }})


        // Edit address screen + values
        for(let i=0;i<editbutton.length;i++){
        editbutton[i].addEventListener('click', function(e){
            let editaddressid = document.querySelectorAll('#EAIDvalue')
            let EditAddress = document.querySelectorAll('#EAvalue')
            let EditCity = document.querySelectorAll('#ECvalue')
            let EditProvince = document.querySelectorAll('#EPvalue')
            let EditZipcode = document.querySelectorAll('#EZCvalue')
            let EditAddressUserID = document.querySelectorAll('#EUIDvalue')
            e.preventDefault()
            // Preloading values of edit_address form
            document.getElementById('EditAddressID').value= editaddressid[i].value
            document.getElementById('EditAddress').value= EditAddress[i].textContent
            document.getElementById('EditCity').value= EditCity[i].textContent
            document.getElementById('EditProvince').value= EditProvince[i].textContent
            document.getElementById('EditZipcode').value= EditZipcode[i].textContent
            document.getElementById('EditAddressUserID').value= EditAddressUserID[i].value
            // Data screen hidden
            for(let i=0; i<datahidden.length;i++){
                datahidden[i].classList.add('hidden')
            }
            // Edit address screen visible
            document.getElementById('editdata').classList.remove('hidden') 
        })}

}