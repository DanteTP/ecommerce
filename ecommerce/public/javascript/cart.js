
window.onload = ()=>{
    let pcart = JSON.parse(localStorage.getItem('cart'))
    let cart = pcart.map(items=>{
        return items.qty>items.data.Stock?
        items={data:items.data,
            qty:items.data.Stock,
            subtotal:items.data.Stock*items.data.Price}
            :items
    })
    localStorage.setItem('cart',JSON.stringify(cart))
    let totalpricevalue = cart.reduce((acc,val)=>{
        return acc + val.subtotal
    },0)
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    let cartbody = document.getElementById('filterbody')
    for (let index = 0; index < cart.length; index++) {
        cartbody.innerHTML+=`<div id="rowlist" class="rowcartcontainer">
        <input id='cartvalueid' type="hidden" value='${cart[index].data.id}'>
        <div class="cartimgcontainer"><div class="carterimg">
        <img id="cardimg" src="/images/${cart[index].data.Img[0].Name}" alt=""></div></div>
        <div  class="carttitlecontainer">
        <h1>${cart[index].data.Name}</h1><div class="cartcounter">
        <div id="countsus" class="counterbut"><i class="fas fa-minus"></i></div>
        <div id="countvalue" class="countervalue">${cart[index].qty}</div>
        <div id="counteradd" class="counterbut"><i class="fas fa-plus"></i></div></div>
        <div class="cartdelete"><i class="fas fa-trash"></i></div></div>
        <div class="pricecartcontainer"><div class="searchprice">$${formatNumber(cart[index].subtotal)}</div>
        </div></div>`
        }
    

    if(cart.length>0){
        cartbody.innerHTML+=`  <div id="rowlist" class="rowcartcontainer">
        <div class="cartendbuttons">
          <button onclick="window.location='/'">Seguir comprando</button>
          <button id='fetch' onclick="window.location='/product/cart/login'" >Finalizar compra</button>
        </div>
        <div class="pricecontainer" style="background-color: rgb(247, 245, 245); height: 5vh;">
          <div class="searchprice" id="carttotalprice">Total $${formatNumber(totalpricevalue)}</div>
         </div>
      </div>`
    } else{
        cartbody.innerHTML+=`<div id="rowlist" class="rowcartcontainer"><div>Lo setimos pero al parecer tu carrito esta vac??o</div>
        <div class="cartendbuttons"><button onclick="window.location='/'">Seguir comprando</button></div></div>`
    }
    
    let deletebuttons = document.querySelectorAll('.cartdelete')
    let id = document.querySelectorAll('#cartvalueid')
    let addbutton = document.querySelectorAll('#counteradd')
    let susbutton = document.querySelectorAll('#countsus')
    let countervalue = document.querySelectorAll('#countvalue')
    let price = document.querySelectorAll('.searchprice')
    let total = document.getElementById('carttotalprice')

    // Deleting items from cart
    for (let index = 0; index < deletebuttons.length; index++) {
        deletebuttons[index].addEventListener('click',()=>{
            let ncart = cart.filter(items => {return Number(items.data.id) !== Number(id[index].value)})
            localStorage.setItem('cart',JSON.stringify(ncart))
            location.reload()
        })
    }

    for (let index = 0; index < addbutton.length; index++) {
        addbutton[index].addEventListener('click',()=>{
        let value = Number(countervalue[index].innerText)+1
        let ncart = cart.map(items=>{return items.data.id==Number(id[index].value)?
        items={
            data:items.data,
            qty:value>items.data.Stock?items.data.Stock:value,
            subtotal:items.data.Price*(value>items.data.Stock?items.data.Stock:value)
            }:items})
        localStorage.setItem('cart',JSON.stringify(ncart))
        countervalue[index].innerText=`${ncart[index].qty}`
        price[index].innerText=`$${formatNumber(ncart[index].subtotal)}`
        let totalpricevalue = ncart.reduce((acc,val)=>{
            return acc + val.subtotal
        },0)
        total.innerText=`Total $${formatNumber(totalpricevalue)}`
        // location.reload()
     })}

        for (let index = 0; index < susbutton.length; index++) {
            susbutton[index].addEventListener('click',()=>{
                let value = Number(countervalue[index].innerText)-1
                let ncart =  cart.map(items=>{return items.data.id==Number(id[index].value)?
                    items={
                        data:items.data,
                        qty:value<1?1:value,
                        subtotal:items.data.Price*(value<1?1:value)
                    }:items})
                localStorage.setItem('cart',JSON.stringify(ncart))
                countervalue[index].innerText=`${ncart[index].qty}`
                price[index].innerText=`$${formatNumber(ncart[index].subtotal)}`
                let totalpricevalue = ncart.reduce((acc,val)=>{
                    return acc + val.subtotal
                },0)
                total.innerText=`Total $${formatNumber(totalpricevalue)}`

            })}

        for(let i = 0;i<susbutton.length;i++){
            susbutton[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"
            })}
        for(let i = 0;i<susbutton.length;i++){
            susbutton[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"
            })}
        for(let i = 0;i<addbutton.length;i++){
            addbutton[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"
            })}
        for(let i = 0;i<addbutton.length;i++){
            addbutton[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"
            })}   
        for(let i = 0;i<deletebuttons.length;i++){
            deletebuttons[i].addEventListener('mouseenter',function(){
            document.body.style.cursor="pointer"
            })}
        for(let i = 0;i<deletebuttons.length;i++){
            deletebuttons[i].addEventListener('mouseleave',function(){
            document.body.style.cursor="default"
            })}             
        }
