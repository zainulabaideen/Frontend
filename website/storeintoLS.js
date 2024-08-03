export const storeintoLS=(quantity,price,id)=>{
    let cartData=JSON.parse(localStorage.getItem("cartData")) || [];
    let existingItem=cartData.find((item)=>item.id=== id);
if(existingItem){
    existingItem.quantity=quantity;
    existingItem.price=price;
}else{
    let cart={id,price,quantity};
    cartData.push(cart);
}

localStorage.setItem("cartData",JSON.stringify(cartData))
    // alert( "Product with "+ id + " Added Successfully !!")
}