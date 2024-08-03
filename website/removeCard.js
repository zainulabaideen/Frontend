export const removeCard=(id)=>{
let cartData=JSON.parse(localStorage.getItem("cartData"))|| [];

let newid=Number(id);
    const filtereddata=cartData.filter((elem)=>elem.id!==newid)
console.log(filtereddata);
const cardElement=document.getElementById(`card${id}`)
if(cardElement){
    
    cardElement.remove();
}
localStorage.setItem("cartData",JSON.stringify(filtereddata))  
}