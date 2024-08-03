export const totalPrice=()=>{
   const cartData=JSON.parse(localStorage.getItem("cartData"))||[];
   console.log(cartData)
    const subtotal=document.querySelector('.productSubTotal');
    const finaltotal=document.querySelector('.productFinalTotal');
    let price=cartData.reduce((curTotal,curelem)=>{return curTotal+curelem.price},0);
    console.log(price);
    subtotal.textContent=price;
    console.log(typeof(subtotal)) 
        finaltotal.textContent=price+500;
}