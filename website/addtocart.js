import { GetProducts } from "./GetProducts";
import { removeCard } from "./removeCard";
import { storeintoLS } from "./storeintoLS";
import { totalPrice } from "./totalPrice";

const addtocartProducts=async()=>{
  totalPrice();
    // api data 
const Products= await GetProducts(); 
// localStorage data
const cartData=JSON.parse(localStorage.getItem("cartData"))||[];
// id,quantity , price 

const cartIds=cartData.map(item=>item.id);
console.log(cartIds);
// [5,10]
// filtration 
let quantity=1;
const filtereddata=Products.filter(product=>cartIds.includes(product.id));
const cardcontainer=document.querySelector('.addtocartcontainer');
filtereddata.forEach(element => {
  const cartItem=cartData.find(item=>item.id===element.id);
   quantity=cartItem.quantity;
    let myhtml=` <div class="addtocartcards" id="cardValue">
            <article class="information" id="card${element.id}">
              <div>
                <span class="category">${element.category}</span>
              </div>
              <div class="imageContainer">
                <img class="productImage" src="http://localhost:8080${element.image}" alt="${element.alt}" />
              </div>
      
              <h2 class="productName">${element.name}</h2>
      
              <p class="productPrice" data-price="${element.price}">${element.price}</p>
      
              <div class="stockElement">
                <button class="cartIncrement" data-id="${element.id}">+</button>
                <p class="productQuantity" data-quantity="${quantity}">${quantity}</p>
                <button class="cartDecrement" data-id="${element.id}">-</button>
              </div>
      
              <button class="add-to-cart-button remove-to-cart-button" data-id=${element.id}>
                Remove
              </button>
            </article>
          </div>
`
cardcontainer.innerHTML+=myhtml;

});

// for removing card 
document.querySelectorAll('.remove-to-cart-button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productId = event.target.getAttribute('data-id');
        console.log("cartremoval ",productId)
        removeCard(productId);
   
});

});


// for incrementing card
document.querySelectorAll('.cartIncrement').forEach(button=>{
button.addEventListener('click',(event)=>{
  const productId = Number(event.target.getAttribute('data-id'));
  const productQuantity=document.querySelector(`#card${productId} .productQuantity`)
 let quantity=parseInt(productQuantity.getAttribute('data-quantity'))
  const priceElement=document.querySelector(`#card${productId} .productPrice`);
const price=Number(priceElement.getAttribute('data-price'));
console.log(typeof(price))
// console.log(typeof(quantity))
// console.log(typeof(productId))
const specificfilteredid=filtereddata.find(item=>item.id===productId);

if(quantity < specificfilteredid.stock ){
  console.log("stcok")
  console.log(specificfilteredid.stock)
  quantity++;
  productQuantity.textContent=quantity;
  const newprice=specificfilteredid.price*quantity;
  priceElement.textContent=newprice

  priceElement.setAttribute('data-price',newprice)
  productQuantity.setAttribute('data-quantity',quantity)
console.log(quantity)

storeintoLS(quantity,newprice, productId)
totalPrice();
}
})

})



// for decrement card
document.querySelectorAll('.cartDecrement').forEach(button=>{
  button.addEventListener('click',(event)=>{
    const productId = Number(event.target.getAttribute('data-id'));
    const productQuantity=document.querySelector(`#card${productId} .productQuantity`)
   let quantity=parseInt(productQuantity.getAttribute('data-quantity'))
    const priceElement=document.querySelector(`#card${productId} .productPrice`);
  const price=Number(priceElement.getAttribute('data-price'));
  console.log(typeof(price))
  // console.log(typeof(quantity))
  // console.log(typeof(productId))

  const specificfilteredid=filtereddata.find(item=>item.id===productId);
  
  if(quantity >1 ){
    console.log("stcok")
 
    quantity--;
    productQuantity.textContent=quantity;
  const updatedprice=specificfilteredid.price*quantity;

    priceElement.textContent=updatedprice;

    productQuantity.setAttribute('data-quantity',quantity)
  console.log(quantity)
  
  storeintoLS(quantity,updatedprice, productId)
  totalPrice();
  }
  })
  
  })

}


addtocartProducts();
