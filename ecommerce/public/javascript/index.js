window.onload = ()=>{
    let cookiesbutton = document.querySelectorAll('.cookiesbutton')
    let cookiewelcome = document.getElementById('cookiewelcome')
    let cookie = document.cookie

    if(localStorage.getItem('cookie') || cookie){
        cookiewelcome.classList.add('hidden')
    }

    for(let i=0;i<cookiesbutton.length;i++){
        cookiesbutton[i].addEventListener('click',function(){
            if(cookiesbutton[i].value=='Aceptar'){
                localStorage.setItem('cookie', 'aceptada')
                cookiewelcome.classList.add('hidden')
            }else{
                localStorage.setItem('cookie', 'rechazada')
                cookiewelcome.classList.add('hidden')
            }
        })
    }


}