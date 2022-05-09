import { checkout } from "../components/checkoutnavbar.js";

import { paymentfooter } from "../components/paymentfooter.js";


let navi=document.getElementById("strange")
navi.innerHTML=paymentfooter()

let navbari=document.getElementById("Thanos")
navbari.innerHTML=checkout()

var cartData = JSON.parse(localStorage.getItem("cart"))||[]


let length=cartData.length
document.getElementById("starlord").innerText=`${length}`
function len(cartData){
    document.querySelector("#starlord").innerText=null
  let length=cartData.length
  document.querySelector("#starlord").innerText=`${length}`
}



$(window).on("load",function(){
    $(".heart").fadeOut(1000);
    $(".ironman-2").fadeIn(1000)
})

window.addEventListener("load",function(){
    len(cartData)
})
var cartData = JSON.parse(localStorage.getItem("cart"))||[]


cartData.map(function(elem,index){

  
    var box = document.createElement("div");
   
    let boxi=document.createElement("div")
    boxi.setAttribute("class","singh")

    var img = document.createElement("img");
    img.setAttribute("class", "img_div")
    img.src = elem.image;
   
    var status = document.createElement("p");
    status.setAttribute("class", "status_div")
    status.innerText = elem.status

    var names = document.createElement("h3");
    names.setAttribute("class", "names_div")
    names.textContent = elem.name;

    var about = document.createElement("p");
    about.setAttribute("class", "about_div")
    about.innerText = elem.about;

    var prices = document.createElement("p");
    prices.setAttribute("class", "prices_div")
    prices.innerText = "$"+elem.price;

    var discount = document.createElement("p")
    discount.setAttribute("class", "discount_div")
    discount.innerText = elem.discount;


    // var btn = document.createElement("button");
    // btn.innerText = "Remove";
    // btn.setAttribute("class", "buttons_div");
    // btn.addEventListener("click", function() {
    //     removeItem(elem,index)
    // })

     
    
    boxi.append(status,names,about,prices,discount)
    box.append(img,boxi)

    document.querySelector("#container").append(box);
});





let pure=localStorage.getItem("para")
// let pur=localStorage.getItem("par")
let total=cartData.reduce(function(sum,el,i,ar){
    return sum+Number(el.price)
  },0)
  
  // let total=cartData.price
  // document.querySelector("#total")
  document.querySelector("#tota").innerText="$"+total.toFixed(2)
 
  console.log(pure)
  
  let puratotal;
  if(total==0){
  puratotal=0
  document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)
  }
  else{
    // if(Number(pure)!=0){
      
    // }
    puratotal=total+10.55+1.55
    if(pure.length>0){
    document.querySelector("#estimate").innerText=pure
    }
    else{
        document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)
    }
  }
  

  let sor=JSON.parse(localStorage.getItem("loki"))
let div=document.querySelector(".ul")
div.innerHTML=`<ul>
<li>${sor[0].name}</li>
<li>${sor[0].state}</li>
<li>${sor[0].Address1}</li>
<li>${sor[0].city}</li>
<li>${sor[0].country}</li>
<li>${sor[0].number}</li>
</ul>
<div class="bro">
<a href="./1.html">Edit</a>
</div>`






// let total=cartData.reduce(function(sum,el,i,ar){
//     return sum+Number(el.price)
//   },0)
  
  




  
  
//   let puratotal;
//   if(total==0){
//   puratotal=0
//   document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)
//   }
//   else{
//     puratotal=total+10.55+1.55
//     document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)
//   }
//   document.querySelector("#tota").innerText="$"+total.toFixed(2)
//  let zigzag=document.querySelector(".pq")

//   let vision=document.getElementById("vision")

//   vision.onclick=function(){

   

//     let pr=document.querySelector(".cotacti")
//     let Masai="masai30"
//     let promo=document.getElementById("promo").value
//     if(promo==Masai){
//         // document.querySelector("#tota").innerText=null

//         document.querySelector("#estimate").innerText=null

//     //    total=Number(total)-(Number(total)*30)/100
//     //    document.querySelector("#tota").innerText="$"+total.toFixed(2)
       

//        if(total==0){
//         puratotal=0
//         document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)
//         }
//         else{
//             puratotal=puratotal-(puratotal*30)/100
//             document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)

//         }

//         alert("you have save 30% discount Thankyou")
     
//         zigzag.style.display="block"
//         setTimeout(() => {
//             zigzag.style.animationPlayState = 'paused'
//         }, 20000);
//         pr.style.display="none"

//        }
//        else{
//            alert("Sorry!Not Valid Code")
//        }

















     
    
      
     

//     }

  
  // let total=cartData.price
  // document.querySelector("#total")




 
//   let vision=document.getElementById("vision")
// let pr=document.querySelector(".cotacti")


// vision.onclick=function(){

   

//     let Masai="masai30"
//     let promo=document.getElementById("promo").value
//     if(promo==Masai){
//        total=Number(total)-(Number(total)*30)/100
//        alert("you have save 30% discount Thankyou")
//        pr.style.display="none"

//     }
// }


  
//   document.getElementById("email").value=""
//   document.getElementById("password").value=""
//   let but=document.getElementById("bat")
//   let cat=0
//   but.onclick=function(){
//     if(cat==0){
//    let pass=document.getElementById("password")
//    pass.type="text"
//    cat++
//     }
//     else{
//       let pass=document.getElementById("password")
//       pass.type="password"
//       cat=0
//     }
//   }



// document.getElementById("ba").addEventListener("click",()=>{
//     window.location.href="./3.html"

// })


// let length=cartData.length
// document.getElementById("starlord").innerText=`${length}`
// function len(cartData){
//     document.querySelector("#starlord").innerText=null
//   let length=cartData.length
//   document.querySelector("#starlord").innerText=`${length}`
// }

window.addEventListener("load",function(){
    len(cartData)
})

// document.getElementById("papu").addEventListener("click",()=>{
//     window.location.href="./3.html"
// })
document.getElementById("place").addEventListener("click",()=>{
  window.location.href="../succes/index.html"
})

