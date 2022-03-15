window.onload = ()=>{
    let id = document.getElementById('categoryId')
    fetch(`/api/product/search/${id.value}`)
    .then(response => response.json())
    .then(dataf => {
      let data = dataf.data.Produtspercategory
      localStorage.setItem('searched',JSON.stringify(dataf.data.Produtspercategory))

      let filtercontent = document.getElementById('filtercontet')
      let rangevalue = document.getElementById('rangevalue')
      let range = document.getElementById('range')
      let categoryfilter = document.getElementById('categoryfilter')
      let filterUp = document.getElementById('priceup')
      let filterdown = document.getElementById('pricedown')

      function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      }

      let prevfilter = {
          price:range.max,
          category:0,
          order:0
        }
      let searchfiltered = data
      rangevalue.innerHTML=`${formatNumber(range.value)}`
      
      range.addEventListener('change',()=>{
          filtercontent.innerHTML=''
          rangevalue.innerHTML=`$ ${formatNumber(range.value)}`
          range.value==0?prevfilter.price=Number(range.max):prevfilter.price=Number(range.value)
          if(prevfilter.category!==0 ){
          searchfiltered = data.filter((items)=>{
              return items.Price<= prevfilter.price && items.Category_Id== prevfilter.category})
          }else{
              searchfiltered = data.filter((items)=>{
                  return items.Price<= prevfilter.price || items.Category_Id==prevfilter.category})
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
        filterUp.addEventListener('click',()=>{
          prevfilter.order=='up'
          filtercontent.innerHTML=''
          searchfiltered.sort((a,b)=>{
            return b.Price - a.Price
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
  
      


    })






}