window.onload = ()=>{
    let id = document.getElementById('categoryId')
    fetch(`/api/product/search/${id.value}`)
    .then(response => response.json())
    .then(dataf => {
      let data = dataf.data.Produtspercategory
      let filtercontent = document.getElementById('filtercontet')
      let rangevalue = document.getElementById('rangevalue')
      let range = document.getElementById('range')
      let categoryfilter = document.getElementById('categoryfilter')
      
      let prevfilter = {
          price:range.max,
          category:0
      }
      let searchfiltered = []
      rangevalue.innerHTML=`${range.value}`
      
      range.addEventListener('change',()=>{
          filtercontent.innerHTML=''
          rangevalue.innerHTML=`$ ${range.value}`
          range.value==0?prevfilter.price=Number(range.max):prevfilter.price=Number(range.value)
          if(prevfilter.category!==0){
          searchfiltered = data.filter((items)=>{
              return items.Price<= prevfilter.price && items.Category_Id== prevfilter.category})
          }else{
              searchfiltered = data.filter((items)=>{
                  return items.Price<= prevfilter.price || items.Category_Id==prevfilter.category})
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
                  <div class="searchprice">${searchfiltered[i].Price}</div>
                </div></a>
            </div>`
          }
        })

          
  
      


    })






}