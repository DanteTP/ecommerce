window.onload = ()=>{
    let id = document.getElementById('searchvalue')
    fetch(`/api/product/searchbar/${id.value}`)
    .then(response => response.json())
    .then(dataf => {

      let data = dataf.data
      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }

      

      let filtercontent = document.getElementById('filtercontet')
      let rangevalue = document.getElementById('rangevalue')
      let range = document.getElementById('range')
      let gencategoryfilter = document.getElementById('gencategoryfilter')
      let subcategoryfilter = document.getElementById('subcategoryfilter')
      let gencategoryfilterroute = document.getElementById('gencategoryfilterroute')
      let subcategoryfilterroute = document.getElementById('subcategoryfilterroute')
      let filterUp = document.getElementById('priceup')
      let filterdown = document.getElementById('pricedown')

      let prevfilter = {
          price:Number(range.max),
          gencategory:0,
          subcategory:0,
          order:0
      }

      let searchfiltered = data.products
      rangevalue.innerHTML=`${formatNumber(range.value)}`

      range.addEventListener('change',()=>{
          filtercontent.innerHTML=''
          rangevalue.innerHTML=`$ ${formatNumber(range.value)}`
          range.value==0?prevfilter.price=Number(range.max):prevfilter.price=Number(range.value)
          if(prevfilter.gencategory!==0){
          searchfiltered = data.products.filter((items)=>{
              return items.Price<= prevfilter.price && items.CategoryperProduct.Subcategory==prevfilter.gencategory})
          }else{
              searchfiltered = data.products.filter((items)=>{
                  return items.Price<= prevfilter.price || items.CategoryperProduct.Subcategory==prevfilter.gencategory})
          }
          if(prevfilter.order=='up'){
            searchfiltered.sort((a,b)=>{
              return b.Price - a.Price
           })
          }else if(prevfilter.order=='down'){
            searchfiltered.sort((a,b)=>{
              return a.Price - b.Price
           })
          }
          for(let i=0;i<searchfiltered.length;i++){
              filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
                <div class="imgcontainer">
                  <div class="filterimg">
                    <img id="cardimg" src="/images/${searchfiltered[i].Picturesperproduct[0].Name}" alt="">
                </div>
                </div>
                <a href="/product/detail/${searchfiltered[i].id}" class="titlecontainer" style="text-decoration: none;" >
                <div class="titlecontainer"><h1>${searchfiltered[i].Name}</h1></div></a>
                <a href="/product/detail/${searchfiltered[i].id}" class="pricecontainer" style="text-decoration: none;" ><div class="pricecontainer">
                  <div class="searchprice">$${formatNumber(searchfiltered[i].Price)}</div>
                </div></a>
            </div>`
          }
        })


  
        gencategoryfilter.addEventListener('change',()=>{
          console.log(prevfilter.gencategory);
          if(gencategoryfilter.value!=0){
          let found = data.categories.find(item=>{return item.id == gencategoryfilter.value})
          gencategoryfilterroute.innerHTML=`${found.Name}`
          let subcategories = data.categories.filter(items=>{return items.Subcategory == gencategoryfilter.value})
          subcategoryfilter.innerHTML=``
          subcategoryfilter.innerHTML+=`<option value="0">Elige una categoria</option>`
          for (let index = 0; index < subcategories.length; index++) {
            subcategoryfilter.innerHTML+=`<option id="catoption" value="${subcategories[index].id}">${subcategories[index].Name}</option>`}}
          else{subcategoryfilter.innerHTML=''}
          filtercontent.innerHTML=''
          Number(gencategoryfilter.value)==0? prevfilter.gencategory=Number(0):prevfilter.gencategory=Number(gencategoryfilter.value)
          if(prevfilter.gencategory!==0){
              searchfiltered = data.products.filter((items)=>{
                  return items.Price<=prevfilter.price && items.CategoryperProduct.Subcategory==prevfilter.gencategory})
              }else{
                  searchfiltered = data.products.filter((items)=>{
                      return items.Price<=prevfilter.price})}
                      if(prevfilter.order=='up'){
                        searchfiltered.sort((a,b)=>{
                          return b.Price - a.Price
                       })
                      }else if(prevfilter.order=='down'){
                        searchfiltered.sort((a,b)=>{
                          return a.Price - b.Price
                       })
                      }
          for(let i=0;i<searchfiltered.length;i++){
            filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
              <div class="imgcontainer">
                <div class="filterimg">
                  <img id="cardimg" src="/images/${searchfiltered[i].Picturesperproduct[0].Name}" alt="">
              </div>
              </div>
              <a href="/product/detail/${searchfiltered[i].id}" class="titlecontainer" style="text-decoration: none;" >
              <div class="titlecontainer"><h1>${searchfiltered[i].Name}</h1></div></a>
              <a href="/product/detail/${searchfiltered[i].id}" class="pricecontainer" style="text-decoration: none;" ><div class="pricecontainer">
                <div class="searchprice">$${formatNumber(searchfiltered[i].Price)}</div>
              </div></a>
          </div>`
        }
            })

              subcategoryfilter.addEventListener('change',()=>{
                if(subcategoryfilter.value!=0){
                let found = data.categories.find(item=>{return item.id == subcategoryfilter.value})
                subcategoryfilterroute.innerHTML=` > ${found.Name}`}
                filtercontent.innerHTML=''
                Number(subcategoryfilter.value)==0? prevfilter.subcategory=Number(0):prevfilter.subcategory=Number(subcategoryfilter.value)
                if(prevfilter.subcategory!==0){
                    searchfiltered = data.products.filter((items)=>{
                        return items.Price<=prevfilter.price && items.CategoryperProduct.Subcategory==prevfilter.gencategory && items.CategoryperProduct.id == prevfilter.subcategory})
                    }else{
                        searchfiltered = data.products.filter((items)=>{
                  return items.Price<=prevfilter.price && items.CategoryperProduct.Subcategory==prevfilter.gencategory})}
                            if(prevfilter.order=='up'){
                              searchfiltered.sort((a,b)=>{
                                return b.Price - a.Price
                             })
                            }else if(prevfilter.order=='down'){
                              searchfiltered.sort((a,b)=>{
                                return a.Price - b.Price
                             })
                            }
                for(let i=0;i<searchfiltered.length;i++){
                  filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
                    <div class="imgcontainer">
                      <div class="filterimg">
                        <img id="cardimg" src="/images/${searchfiltered[i].Picturesperproduct[0].Name}" alt="">
                    </div>
                    </div>
                    <a href="/product/detail/${searchfiltered[i].id}" class="titlecontainer" style="text-decoration: none;" >
                    <div class="titlecontainer"><h1>${searchfiltered[i].Name}</h1></div></a>
                    <a href="/product/detail/${searchfiltered[i].id}" class="pricecontainer" style="text-decoration: none;" ><div class="pricecontainer">
                      <div class="searchprice">$${formatNumber(searchfiltered[i].Price)}</div>
                    </div></a>
                </div>`
              }})

              filterUp.addEventListener('click',()=>{
                prevfilter.order=='up'
                filtercontent.innerHTML=''
                searchfiltered.sort((a,b)=>{
                  return b.Price - a.Price
               })
               console.log(searchfiltered);
               for(let i=0;i<searchfiltered.length;i++){
                filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
                  <div class="imgcontainer">
                    <div class="filterimg">
                      <img id="cardimg" src="/images/${searchfiltered[i].Picturesperproduct[0].Name}" alt="">
                  </div>
                  </div>
                  <a href="/product/detail/${searchfiltered[i].id}" class="titlecontainer" style="text-decoration: none;" >
                  <div class="titlecontainer"><h1>${searchfiltered[i].Name}</h1></div></a>
                  <a href="/product/detail/${searchfiltered[i].id}" class="pricecontainer" style="text-decoration: none;" ><div class="pricecontainer">
                    <div class="searchprice">$${formatNumber(searchfiltered[i].Price)}</div>
                  </div></a>
              </div>`
            }
            })

            filterdown.addEventListener('click',()=>{
              prevfilter.order=='down'
              filtercontent.innerHTML=''
              searchfiltered.sort((a,b)=>{
                return a.Price - b.Price
             })
             for(let i=0;i<searchfiltered.length;i++){
              filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
                <div class="imgcontainer">
                  <div class="filterimg">
                    <img id="cardimg" src="/images/${searchfiltered[i].Picturesperproduct[0].Name}" alt="">
                </div>
                </div>
                <a href="/product/detail/${searchfiltered[i].id}" class="titlecontainer" style="text-decoration: none;" >
                <div class="titlecontainer"><h1>${searchfiltered[i].Name}</h1></div></a>
                <a href="/product/detail/${searchfiltered[i].id}" class="pricecontainer" style="text-decoration: none;" ><div class="pricecontainer">
                  <div class="searchprice">$${formatNumber(searchfiltered[i].Price)}</div>
                </div></a>
            </div>`
          }
      
          })




})}