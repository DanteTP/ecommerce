
window.onload = ()=>{
        let User_Id = document.getElementById('User_Id')
        let order = []
        let products = JSON.parse(localStorage.getItem('cart'))
        
        for(let prod of products){
            let dato = 
                {id: prod.data.id,
                qty: prod.qty
        }
        order.push(dato)}

        let data = {
            id:User_Id.value
            ,
            order:order
        }


        document.getElementById('newaddress').addEventListener('click',(e)=>{
            e.preventDefault()
            console.log(order);
            fetch('/api/product/fetch',{
                method:'POST',
                body:JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => response.json())
            .then(json =>
                console.log(json)
                
                );

        })




}