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


    let cardimgs = document.querySelectorAll('#cardimg')
    let ncontrol = document.querySelectorAll('#cnext')
    let pcontrol = document.querySelectorAll('#cprev')
    
    
    for(let x=0; x<ncontrol.length;x++){
        let index = x*3
        let initialindex = x*3
        let indexmax = Number(x*3+2)
        let cardmax = Number(index+2)    
        ncontrol[x].addEventListener('click',function(){
        if(index<indexmax){
            index ++
        for(let i=initialindex;i<=cardmax;i++){
            if(i!==index){
                cardimgs[i].classList.add('hidden')
            }else{
                cardimgs[index].classList.remove('hidden')
                }
            }
        }
        })
        pcontrol[x].addEventListener('click',function(){
            if(index>x*3){
                index --
            for(let i=initialindex;i<=cardmax;i++){
                if(i!==index){
                    cardimgs[i].classList.add('hidden')
                }else{
                    cardimgs[index].classList.remove('hidden')
                    }
                }
            }
            })
        
    }

    for(let i=0; i<pcontrol.length;i++){
        pcontrol[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"})}

    for(let i=0; i<pcontrol.length;i++){
        pcontrol[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"})}

    for(let i=0; i<ncontrol.length;i++){
        ncontrol[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"})}

    for(let i=0; i<ncontrol.length;i++){
        ncontrol[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"})}
}