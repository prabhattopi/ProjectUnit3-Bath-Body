
// import {navbar}  from "/components/navbar.js"

// let nav_container=document.getElementById("navbarshr")
// nav_container.innerHTML= navbar()
// console.log(navbar())

let product = JSON.parse(localStorage.getItem("product_det"))
console.log(product)

product.map((el)=>{
   let image = document.createElement("img");
   image.src = el.image;
   image.id = "imagea"

   let image2 = document.createElement("img");
   image2.src = el.image ;
   image2.id = "image2"

   let name = document.createElement("p");
   name.innerText = el.name ;
   name.id = "namesh"

   let about = document.createElement("p");
   about.innerText = el.about ;
   about.id = "aboshr"

   let star = document.createElement("div");
   star.id = "starsh"
   let li = document.createElement("img");
   li.src = "https://png.pngitem.com/pimgs/s/45-456711_4-star-rating-transparent-hd-png-download.png";
   li.id = "li" ;

   let re = document.createElement("p");
   re.innerText = "(7)"+" "+"Write A Review";
   re.style.fontSize = "12px" ;
   re.style.marginTop = "11px";
   re.style.fontWeight = "400";
   re.style.textDecoration = "underline"


   let price = document.createElement("h5");
   price.innerText = "$"+ el.price ;
   price.id = "pricesh"


   let des = document.createElement("p");
   des.innerText = "10 fl oz / 295 mL";
   des.style.marginLeft = "20px";

   let gift = document.createElement("p");
   gift .innerText = el.discount ;
   gift.style.color = "firebrick";
   gift.style.marginLeft = "20px";
   gift.style.lineHeight = "25px";
   gift.style.fontSize = "14px";


   let det = document.createElement("p");
   det.innerText = "details";
   det.style.fontSize = "12px" ;
   det.style.marginTop = "11px";
   det.style.fontWeight = "400";
   det.style.textDecoration = "underline";
   det.style.marginLeft = "20px";
   det.style.marginTop = "-5px"


   let hor = document.createElement("hr");
   hor.style.marginLeft = "20px";
   let hor1 = document.createElement("hr");
   hor1.style.marginLeft = "20px";
   hor.style.marginTop = "18px"
   let hor2 = document.createElement("hr");
   hor2.style.marginTop = "20px";
   hor2.style.marginLeft = "20px";

   let deleverysh = document.createElement("div");
   deleverysh.id = "delev" ;


   let h6 = document.createElement("h6");
   h6.innerText = "How do you want to receive it?" ;
   h6.style.marginLeft = "20px";
   h6.style.marginTop = "14px"

   let h61 = document.createElement("h6");
   h61.innerText = "Ship it " ;
   h61.style.marginLeft = "35px";


   let de = document.createElement("div");
   de.id = "desh";

   let k = document.createElement("img");
   k.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3MyvKuF5Zwk56cLzFyazcmSd002lUdZNgw&usqp=CAU";
   k.style.width = "40px";
   k.style.height = "40px";
   k.style.marginLeft = "35px"


   let p1 = document.createElement("p");
   p1.innerText = "Available" ;
   p1.style.marginLeft = "5px";
   p1.style.marginTop = "5px"
   p1.style.lineHeight = "28px";
   p1.style.fontSize = "12px";

   let h5 = document.createElement("h5");
   h5.innerText = "Not eligible for Pick Up In Store";
   h5.style.marginLeft = "35px";
   h5.style.lineHeight = "28px" ;
   h5.style.fontSize = "14px";
   h5.style.marginBottom = "14px"

   let div3 = document.createElement("div");
   div3.setAttribute("class","number");

   let spansh = document.createElement("span");
   spansh.setAttribute("class","minus");
   spansh.innerText = "-" ;

   let inputsh = document.createElement("input");
   inputsh.value = "1" ;

   let spans = document.createElement("span");
   spans.setAttribute("class","plus");
   spans.innerText ="+" ;

   $(document).ready(function() {
      $('.minus').click(function () {
         var $input = $(this).parent().find('input');
         var count = parseInt($input.val()) - 1;
         count = count < 1 ? 1 : count;
         $input.val(count);
         $input.change();
         return false;
      });
      $('.plus').click(function () {
         var $input = $(this).parent().find('input');
         $input.val(parseInt($input.val()) + 1);
         $input.change();
         return false;
      });
   });
   

   let s = document.createElement("button");
   s.innerText = "ADD TO BAG";
   s.id = "btnshr"
    s.addEventListener("click",function(){
        addtocart(el)
    })


   

   document.getElementById("as2").innerText = el.about +" " + "/" ;
   
    de.append(k,p1)
    deleverysh.append(h6,h61,de,h5,hor)

   div3.append(spansh,inputsh,spans,s)
   star.append(li,re)
   document.getElementById("detailshra").append(name,about,star,price,des,gift,det,hor,deleverysh,hor1,div3,hor2);

   document.getElementById("imageshr").append(image , image2)
})
// let length=cartData.length
// document.getElementById("starlord").innerText=`${length}`
// function len(cartData){
//     document.querySelector("#starlord").innerText=null
//   let length=cartData.length
//   document.querySelector("#starlord").innerText=`${length}`
// }
// window.addEventListener("load",function(){
//     len(cartData)
// })

let cart = JSON.parse(localStorage.getItem("cart")) || [] ;
function addtocart(el){
   cart.push(el);
   // len(cartData)
   localStorage.setItem("cart",JSON.stringify(cart))
   console.log(cart)

}
