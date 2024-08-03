import { GetProducts } from "./GetProducts"

export const AllProducts=async ()=>{
    const products=await GetProducts();

    const container=document.querySelector("#parent-container");
    const template=document.querySelector("#productstemplate");
    products.forEach((prod) => {
        const prodClone=document.importNode(template.content,true)
        prodClone.querySelector(".cards").setAttribute("id",`card${prod.id}`)
        prodClone.querySelector(".card-img-top").src=`http://localhost:8080${prod.image}`
        prodClone.querySelector(".card-img-top").alt=prod.alt;
        prodClone.querySelector(".card-title").textContent=prod.name;
        prodClone.querySelector(".price").innerText=prod.price;

     
       prodClone.querySelector("#specificcard").addEventListener("click",()=>{
        console.log("Card Clicked ",prod.id);
       
        let stringid=JSON.stringify(prod.id)
       
       
    localStorage.setItem("setproductid",stringid);
  
       })

       container.append(prodClone);
    });
   
}