window.onload = ()=>{
    let User_Id = document.getElementById('User_Id')
    let formcontainer = document.getElementById('addcontainer')
    let formcontainerborder = document.getElementById('addcontainerborder')
    let ruta = document.getElementById('ruta')

    
    // Cart products view
    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }
    let products = JSON.parse(localStorage.getItem('cart'))
    let totalpricevalue = products.reduce((acc,val)=>{
        return acc + val.subtotal
    },0)
    let cartcontainer = document.getElementById('cartproductscontainer')
    for( let index = 0; index < products.length; index++ ) {
        cartcontainer.innerHTML+= `<div class="chcontainer">
            <div class="choimg"><img src="/images/${products[index].data.Img[0].Name}" alt=""></div>
            <div class="chodata">
                <h5 style="margin: 0;">${products[index].data.Name}</h5>
                <div style="display: flex;justify-content: flex-start;font-size: 70%;"><p>Cantidad unidades ${products[index].qty}</p><p style="margin-left: 5%;">Precio $${formatNumber(products[index].data.Price)}</p></div>
            </div>
            <div class="chtotal">$${formatNumber(products[index].subtotal)}</div></div>`
    }
    cartcontainer.innerHTML+=`<div class="chcontainer">
            <div style="width: 82%; height: 8vh; line-height: 8vh; text-align: right;" >TOTAL</div>
            <div class="chtotal">$${formatNumber(totalpricevalue)}</div>
        </div>
        <a id="orderbutton" class="regbutton" style="margin-left:40%">Continuar</a>`

    // address view functionality
    formcontainerborder.style.border='none'
    formcontainer.classList.add('hidden')
    let orderbutton = document.getElementById('orderbutton')
    
    orderbutton.addEventListener('click',(e)=>{
        formcontainerborder.style.border='1px solid #cbc3c3'
        formcontainer.classList.remove('hidden')
        orderbutton.classList.add('hidden')
        ruta.innerHTML='<a href="" id="prev" class="prev">Order Detail - <a/><p class="rselect">Address detail</p>'

        let prev = document.getElementById('prev')
        prev.addEventListener('click',(e)=>{
            e.preventDefault()
            formcontainer.classList.add('hidden')
            orderbutton.classList.remove('hidden')
            formcontainerborder.style.border='none'
            ruta.innerHTML='<p class="prev">Order Detail</p>'
        })
    })


    // Addresses view
    let addressname = document.getElementById('Address')
    let provincecontainer = document.getElementById('Provselect')
    let citycontainer = document.getElementById('Cityselect')
    let zip_codename = document.getElementById('Zip_Code')

    let addbutton = document.getElementById('addressvalue')
    
    // 
    let address = {}
    let newad = false

    addbutton.addEventListener('change',(e)=>{ 
        switch (true) {
            case addbutton.value=='n/a':
                addressname.value=''
                Zip_Code.value=''
                addressname.removeAttribute('disabled')
                Zip_Code.removeAttribute('disabled')
                provincecontainer.removeAttribute('disabled')
                citycontainer.removeAttribute('disabled')
                Cityselect.innerHTML=''
                fetch('https://apis.datos.gob.ar/georef/api/provincias')
                .then(response => response.json())
                .then(data => {    
                    provincecontainer.innerHTML='<option value="">Por favor selecciona una provincia</option>'    
                for(let i=0 ; i<data.provincias.length ; i++){
                   provincecontainer.innerHTML+=`<option value="${data.provincias[i].nombre}">${data.provincias[i].nombre}</option>`
                }
                citycontainer.innerHTML='<option value="">Por favor selecciona una ciudad</option>'
                })
                provincecontainer.addEventListener('change',function(){
                fetch('https://apis.datos.gob.ar/georef/api/localidades?provincia='+provincecontainer.value+'&max=5000')
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.localidades.length; i++) {
                        Cityselect.innerHTML+=`<option value="${data.localidades[i].nombre}">${data.localidades[i].nombre}</option>`
                                }})})
                newad = true
            break;
            case Number(addbutton.value)>0:
                fetch(`/userapi/user/address/${User_Id.value}`)
                .then(response => response.json())
                .then(dataf => {
                    let value = dataf.data.find(elem =>{return elem.id==addbutton.value})
                    addressname.value = value.Adress
                    zip_codename.value = value.Zip_Code
                    addressname.setAttribute("disabled",true)
                    zip_codename.setAttribute("disabled",true);
                    provincecontainer.innerHTML =`<option value="${value.Province}">${value.Province}</option selected >`
                    citycontainer.innerHTML = `<option value="${value.City}">${value.City}</option selected >`
                })
                newad=false
            break;
            case addbutton.value=='block':
                addressname.setAttribute('disabled','')
                Zip_Code.setAttribute('disabled','')
                provincecontainer.setAttribute('disabled','')
                citycontainer.setAttribute('disabled','')
                provincecontainer.innerHTML=''
                citycontainer.innerHTML=''
                break;
        }})

    // API for checkout
        // document.getElementById('newaddress').addEventListener('click',(e)=>{
        //     e.preventDefault()
        //     address = {
        //         new:newad,
        //         Adress:addressname.value,
        //         Province:provincecontainer.value,
        //         City:citycontainer.value,
        //         Zip_Code:zip_codename.value
        //     }
        //     let order = []
        //     for(let prod of products){
        //         let dato = 
        //             {id: prod.data.id,
        //             qty: prod.qty
        //     }
        //     order.push(dato)}
        //     let data = {
        //         id:User_Id.value
        //         ,
        //         order:order,
        //         address
        //     }
        //     console.log(data);
        //     fetch('/productapi/product/fetch',{
        //         method:'POST',
        //         body:JSON.stringify(data),
        //         headers: {
        //             "Content-type": "application/json; charset=UTF-8"
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(json =>
        //         console.log(json)
                
        //         );

        // })

        paypal.Buttons({
            	        createOrder: () => {
                            address = {
                                        new:newad,
                                        Adress:addressname.value,
                                        Province:provincecontainer.value,
                                        City:citycontainer.value,
                                        Zip_Code:zip_codename.value
                                    }
                            let order = []
                                    for(let prod of products){
                                    let dato = 
                                        {id: prod.data.id,
                                        qty: prod.qty
                                    }
                                    order.push(dato)}
                            let orderdetail = {
                                    id:User_Id.value
                                    ,
                                    order:order,
                                    address
                                    }
            	          return fetch("/productapi/product/create-order", {
            	            method: "post",
                            headers: {
                                    "Content-type": "application/json; charset=UTF-8"},
                            body:JSON.stringify(orderdetail)            
            	          })
            	          .then((response)=>response.json())
                          .then((paypalorder)=>
                          paypalorder.id)
                      },
            	        // Finalize the transaction on the server after payer approval
            	        onApprove: (data, actions) => {
                        	          return fetch(`/productapi/product/capture/${data.orderID}`, {
                        	            method: "post",
                        	          })
                        	          .then((response) => response.json())
                        	          .then((orderData) => {
                                        if(orderData.status=='COMPLETED'){
                                            alert('Gracias por tu compra, tu pedido sera despachado a la brevedad')
                                        }else{
                                            alert('Ocurrió un inconveniente durante tu pago, por favor intenta realizar la orden mas tarde')
                                        }
                                        window.location='/'
                                    })
                                    }
            	      }).render('#paypal');

}