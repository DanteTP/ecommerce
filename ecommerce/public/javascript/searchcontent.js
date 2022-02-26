window.onload = ()=>{
    let rangevalue = document.getElementById('rangevalue')
    let range = document.getElementById('range')
    let rowcontainer = document.querySelectorAll('#rowlist') 
    let pricefilter = document.querySelectorAll('.searchprice')
    let filtercontent = document.getElementById('filtercontet')
    rangevalue.innerHTML=`${range.value}`
    
    

    range.addEventListener('change',()=>{
        rangevalue.innerHTML=`${range.value}`
        filtercontent.innerHTML=''
        for(let i=0;i<pricefilter.length;i++){
            if(Number(pricefilter[i].textContent)>Number(range.value)){
            //  TOMO DATOS DE API PRODUCTOS Y FILTRO
            }
        }
    })
}