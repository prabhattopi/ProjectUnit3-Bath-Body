

let product = JSON.parse(localStorage.getItem("product_det"))
console.log(product)

product.map((el)=>{
   let image = document.createElement("img");
   image.src = el.image;

   let name = document.createElement("p");
   name.innerText = el.name ;
   name.id = "namesh"

   let about = document.createElement("p");
   about.innerText = el.about ;
   about.id = "aboshr"

   let price = document.createElement("h5");
   price.innerText = "$"+ el.price ;
   price.id = "pricesh"


   let des = document.createElement("p");
   des.innerText = "10 fl oz / 295 mL";


   let hor = document.createElement("hr")








   document.getElementById("detailshra").append(name,about,price,des,hor);

   document.getElementById("imageshr").append(image)
})