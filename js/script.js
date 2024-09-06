// alert("привествие")
let buttonState=false
const goods=document.querySelector('.goods')
let basket=0
function addToCart(){
if (buttonState===false) {
    document.getElementById('buy').style.background='gray';
    document.getElementById('buy').innerHTML='в корзине'
    buttonState=true
    basket=basket+1
}
else{
    document.getElementById('buy').style.background='black';
    document.getElementById('buy').innerHTML='купить'
    buttonState=false
    basket=basket-1
}
 console.log(basket)  
 goods.innerHTML=basket 
}

