window.onload = ()=>{
    let max = Number(document.getElementById('stockvalue').value)
    let countersus = document.getElementById('countsus')  
    let counteradd = document.getElementById('counteradd')
    let countervalue = document.getElementById('countvalue')
    let buttons = document.querySelectorAll('.counterbut')
    let count = Number(countervalue.textContent)
    let starbutton = document.querySelectorAll('#starok')
    let prodcartid = document.getElementById('prodcartid')
    let cartadd = document.getElementById('cartadd')
    // let reviewarray = fetch
    let filterarray = [];

    fetch(`/api/product/addcart/${prodcartid.value}`)
        .then(response => response.json())
        .then(dataf => {

    
    counteradd.addEventListener('click',()=>{
        if(count < max){
            count++
            countervalue.innerHTML=`${count}`
        }else{
            alert('stock insuficiente')
        }
    })
    countersus.addEventListener('click',()=>{
        if(count > 1){
            count--
            countervalue.innerHTML=`${count}`
        }
    })

    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"})}

    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"})}

    for(let i=0; i<starbutton.length;i++){
        starbutton[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"})}

    for(let i=0; i<starbutton.length;i++){
        starbutton[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"})}
    
    // obtengo calificación para filtrar
    // for(let i=0; i<starbutton.length;i++){
    //     starbutton[i].addEventListener('click',()=>{
    //         alert(`calificación ${i+1}`)
    //     // al click mapea el array y crea filterarray mediante map
    //     // INNER html de la primer card con el valor 0 del array filtrado
    //     })}
    
        cartadd.addEventListener('click',(e)=>{
        e.preventDefault()
            if(localStorage.getItem('cart')){
            let pcart = JSON.parse(localStorage.getItem('cart'))
            if(pcart.findIndex(item=>item.data.id==prodcartid.value)>=0){
            let ncart = pcart.map(items=>{return items.data.id==prodcartid.value?
            items={
                data:items.data,
                qty:items.qty+count,
                subtotal:items.data.Price*(items.qty+count)
            }:items})
                localStorage.setItem('cart',JSON.stringify(ncart))
            }else{
              let ndata = {data:dataf.data,
                            qty: count,
                            subtotal: dataf.data.Price*count} 
                pcart.push(ndata)
                localStorage.setItem('cart',JSON.stringify(pcart))
            }
        }else{
            let ncart = []
            let ndata = {data:dataf.data,
                qty: count,
                subtotal: dataf.data.Price*count} 
            ncart.push(ndata)
            localStorage.setItem('cart',JSON.stringify(ncart))
        }
        window.location.href='/product/cart'
    })
        })
    
}

