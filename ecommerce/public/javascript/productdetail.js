window.onload = ()=>{
    let max = Number(document.getElementById('stockvalue').value)
    let countersus = document.getElementById('countsus')  
    let counteradd = document.getElementById('counteradd')
    let countervalue = document.getElementById('countvalue')
    let buttons = document.querySelectorAll('.counterbut')
    let count = Number(countervalue.textContent)
    let starbutton = document.querySelectorAll('#starok')
    // let reviewarray = fetch
    let filterarray = [];

    console.log(starbutton);
    
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
    for(let i=0; i<starbutton.length;i++){
        starbutton[i].addEventListener('click',()=>{
            alert(`calificación ${i+1}`)
        // al click mapea el array y crea filterarray mediante map
        // INNER html de la primer card con el valor 0 del array filtrado
        })}
    
    
    
}

