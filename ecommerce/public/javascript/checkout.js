
window.onload = ()=>{
    let User_Id = document.getElementById('User_Id')

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
        </div>`

    // Addresses view
    let addressname = document.getElementById('Address')
    let provincecontainer = document.getElementById('Provselect')
    let citycontainer = document.getElementById('Cityselect')
    let zip_codename = document.getElementById('Zip_Code')

    let addbutton = document.getElementById('addressvalue')
    
    // 
    let address = {}

    addbutton.addEventListener('change',(e)=>{ 
        switch (true) {
            case addbutton.value=='n/a':
                addressname.removeAttribute('disabled')
                Zip_Code.removeAttribute('disabled')
                provincecontainer.removeAttribute('disabled')
                citycontainer.removeAttribute('disabled')
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
        document.getElementById('newaddress').addEventListener('click',(e)=>{
            e.preventDefault()
            address = {
                new:true,
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
            let data = {
                id:User_Id.value
                ,
                order:order,
                address
            }
            console.log(data);
            fetch('/productapi/product/fetch',{
                method:'POST',
                body:JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json =>
                console.log(json)
                // Pendiente cargar metodo de pago
                
                );

        })




}