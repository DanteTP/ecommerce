window.onload = ()=>{
    let cookiesbutton = document.querySelectorAll('.cookiesbutton')
    let cookiewelcome = document.getElementById('cookiewelcome')
    let recentlycontainer = document.getElementById('recently')
    let searched = JSON.parse(localStorage.getItem('searched'))
    let recomendedtitle = document.getElementById('recomendedtitle')
    let recomendedbody = document.getElementById('recomended')


    function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    

    if(localStorage.getItem('cookie')){
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

    
    // Searched cards inner HTML
    let cicle = ''
    if(searched){
        recomendedtitle.classList.remove('hidden')
        if(searched.length>4){
            cicle = 4
        }else{
            cicle= searched.length
        }
    searched.sort((a,b)=>{
        return b.Price - a.Price
     })
        for (let index = 0; index < cicle; index++) {
            recomendedbody.innerHTML+=
            `<div class="card" >
            <div class="cardimg">
                <div id="cprev" style="margin-right: 3%;"><i class="fa-solid fa-circle-arrow-left"></i></div>
                <img id="cardimg" src="/images/${searched[index].Picturesperproduct[0].Name}" alt="">
                <img id="cardimg" src="/images/${searched[index].Picturesperproduct[1].Name}" alt="" class="hidden">
                <img id="cardimg" src="/images/${searched[index].Picturesperproduct[2].Name}" alt="" class="hidden">
                <div id="cnext" style="margin-left: 3%;"><i class="fa-solid fa-circle-arrow-right"></i></div>
            </div>
            <a href="/product/detail/${searched[index].id}" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-decoration: none;">
            <div class="cardname"><p>${searched[index].Name}</p></div>
            <div class="cardprice">$${formatNumber(searched[index].Price)}</div>
            </a>
            </div>`
        }
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
        }else{
            index=initialindex
            for(let i=initialindex;i<=cardmax;i++){
            if(i!==index){
                cardimgs[i].classList.add('hidden')
            }else{
                cardimgs[index].classList.remove('hidden')
                }}
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
                    }}}
            else{
                index=indexmax
                for(let i=initialindex;i<=cardmax;i++){
                    if(i!==index){
                        cardimgs[i].classList.add('hidden')
                    }else{
                        cardimgs[index].classList.remove('hidden')
                        }}
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