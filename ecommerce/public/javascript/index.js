window.onload = ()=>{
    let cookiesbutton = document.querySelectorAll('.cookiesbutton')
    let cookiewelcome = document.getElementById('cookiewelcome')
    let cookie = document.cookie

    if(sessionStorage.getItem('cookie') || cookie){
        cookiewelcome.classList.add('hidden')
    }

    for(let i=0;i<cookiesbutton.length;i++){
        cookiesbutton[i].addEventListener('click',function(){
            if(cookiesbutton[i].value=='Aceptar'){
                sessionStorage.setItem('cookie', 'aceptada')
                cookiewelcome.classList.add('hidden')
            }else{
                sessionStorage.setItem('cookie', 'rechazada')
                cookiewelcome.classList.add('hidden')
            }
        })
    }


}