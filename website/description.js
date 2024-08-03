import { GetProducts } from "./GetProducts"
import { storeintoLS } from "./storeintoLS";

const dynamicdata=async ()=>{
let Products=await GetProducts()
let productid=Number(localStorage.getItem("setproductid"));
// console.log(productid)

let filtereddata=Products.find((product)=>{
return product.id===productid
})
// console.log(filtereddata);

document.querySelector(".desc-img").src=`http://localhost:8080${filtereddata.image}`;
document.querySelector(".desc-img").alt=filtereddata.alt;
document.querySelector(".title").textContent=filtereddata.name;
document.querySelector(".desc").innerText=filtereddata.description;
document.querySelector(".price").innerText=`PKR - ${filtereddata.price}`;
document.querySelector(".stock").innerText=filtereddata.stock;



// incrment or decrement 

let increment=document.getElementById("cartIncrement");
let decrement=document.getElementById("cartDecrement");
let productquantity=document.querySelector(".productQuantity");
let quan=1;
increment.addEventListener("click",()=>{
   if(quan<filtereddata.stock){
    quan++;
    productquantity.innerText=quan;
   }else{
    quan=stock;
   }

})

decrement.addEventListener("click",()=>{
  if(quan==1){
    quan=1;
  }else{
    quan--;
    productquantity.innerText=quan;
  }

})

document.getElementById("cart").addEventListener("click",()=>{
   storeintoLS(quan,filtereddata.price*quan,filtereddata.id);
})

}

dynamicdata();