window.onload = ()=>{
    let data = [{name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci.",
                img:'Comedero-Dispenser-Alimentador-Programable.jpg',
                price:1000,
                category:1},
                {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci.",
                img:'Comedero-Dispenser-Alimentador-Programable.jpg',
                price:2000,
                category:2},
                {name:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, adipisci.",
                img:'Comedero-Dispenser-Alimentador-Programable.jpg',
                price:4000,
            category:3}]

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
    

    for(let i=0;i<data.length;i++){
        filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
        <input id="prodcategory" type="hidden" name="" value="<%= index %> ">
        <input id="price" type="hidden" name="" value="<%= index*1000 %> ">
          <div class="imgcontainer">
            <div class="filterimg">
              <img id="cardimg" src="/images/${data[i].img}" alt="">
          </div>
          </div>
          <div class="titlecontainer"><h1>${data[i].name}</h1></div>
          <div class="pricecontainer">
            <div class="searchprice">${data[i].price}</div>
          </div>
      </div>`
    }
    


    range.addEventListener('change',()=>{
        filtercontent.innerHTML=''
        rangevalue.innerHTML=`$ ${range.value}`
        Number(range.value)==0?prevfilter.price=range.max:prevfilter.price=range.value
        if(prevfilter.category!==0){
        searchfiltered = data.filter((items)=>{
            return items.price<=prevfilter.price && items.category==prevfilter.category})
        }else{
            searchfiltered = data.filter((items)=>{
                return items.price<=prevfilter.price || items.category==prevfilter.category})
        }
        for(let i=0;i<searchfiltered.length;i++){
            filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
            <input id="prodcategory" type="hidden" name="" value="<%= index %> ">
            <input id="price" type="hidden" name="" value="<%= index*1000 %> ">
              <div class="imgcontainer">
                <div class="filterimg">
                  <img id="cardimg" src="/images/${searchfiltered[i].img}" alt="">
              </div>
              </div>
              <div class="titlecontainer"><h1>${searchfiltered[i].name}</h1></div>
              <div class="pricecontainer">
                <div class="searchprice">${searchfiltered[i].price}</div>
              </div>
          </div>`
        }
        })

    categoryfilter.addEventListener('change',()=>{
        filtercontent.innerHTML=''
        Number(categoryfilter.value)==0?prevfilter.category=0:prevfilter.category=categoryfilter.value
        if(prevfilter.category!==0){
            searchfiltered = data.filter((items)=>{
                return items.price<=prevfilter.price && items.category==prevfilter.category})
            }else{
                searchfiltered = data.filter((items)=>{
                    return items.price<=prevfilter.price})
            }
            for(let i=0;i<searchfiltered.length;i++){
                filtercontent.innerHTML+=`<div id="rowlist" class="rowcontainer">
                <input id="prodcategory" type="hidden" name="" value="<%= index %> ">
                <input id="price" type="hidden" name="" value="<%= index*1000 %> ">
                  <div class="imgcontainer">
                    <div class="filterimg">
                      <img id="cardimg" src="/images/${searchfiltered[i].img}" alt="">
                  </div>
                  </div>
                  <div class="titlecontainer"><h1>${searchfiltered[i].name}</h1></div>
                  <div class="pricecontainer">
                    <div class="searchprice">${searchfiltered[i].price}</div>
                  </div>
              </div>`
            }


    })

}