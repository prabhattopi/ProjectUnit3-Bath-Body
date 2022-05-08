import { checkout } from "../components/checkoutnavbar.js";
import { paymentfooter } from "../components/paymentfooter.js";

let navbari=document.getElementById("Thanos")
navbari.innerHTML=checkout()
let navi=document.getElementById("strange")
navi.innerHTML=paymentfooter()


$(window).on("load",function(){
    $(".heart").fadeOut(1000);
    $(".ironman-2").fadeIn(1000)
})

let dropDown=document.querySelector(".textBox");
let d=document.querySelector(".option")
let dropDowni=document.querySelector(".dropdown")
let dro=document.querySelector(".ship")
let count=0
let dou=0
dropDown.onclick=function(){
  if(count==0){
   d.style.opacity="1"
   d.style.visibility="visible"
   dro.style.marginTop="400px"

  // daro.style.top="22px"
  // daro.style.transform="rotate(-225deg)"
  // dropDown.classList.add("active")

   count++
  }
 
  // if(count==0){
  //   dropDown.classList.add("active")
  //   count++
  //   return
  // }
  else{
    // let drip=document.querySelector(".dropdown.textBox")
    d.style.opacity="0"
    d.style.visibility="hidden"
    dro.style.marginTop="0px"
    count=0
    
  }


  if(dou<1){
    dropDowni.classList.add("active")
    dou++
   
    }
    else if(dou<2){
      dropDowni.classList.remove('active')
      dou=0
    }
   
}

// 
// dropDowni.onclick=function(){
 
//   return
  
// }






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





let length=cartData.length
document.getElementById("starlord").innerText=`${length}`
function len(cartData){
    document.querySelector("#starlord").innerText=null
  let length=cartData.length
  document.querySelector("#starlord").innerText=`${length}`
}

window.addEventListener("load",function(){
    len(cartData)
})

let total=cartData.reduce(function(sum,el,i,ar){
  return sum+Number(el.price)
},0)

// let total=cartData.price
// document.querySelector("#total")
document.querySelector("#tota").innerText="$"+total.toFixed(2)

let puratotal;
if(total==0){
puratotal=0
document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)
}
else{
  puratotal=total+10.55+1.55
  document.querySelector("#estimate").innerText="$"+puratotal.toFixed(2)
}

document.getElementById("email").value=""
document.getElementById("password").value=""
let but=document.getElementById("bat")
let cat=0
but.onclick=function(){
  if(cat==0){
 let pass=document.getElementById("password")
 pass.type="text"
 cat++
  }
  else{
    let pass=document.getElementById("password")
    pass.type="password"
    cat=0
  }
}
// function sent(){
  
// }

// let name=document.getElementById("name").value
// let last=document.getElementById("last").value
// let Address1=document.getElementById("address1").value
// let Address2=document.getElementById("address2").value
// let country=document.getElementById("country").value
// let city=document.getElementById("city").value
// let state=document.getElementById("state").value
// let code=document.getElementById("code").value
// let number=document.getElementById("no").value
// let check=document.getElementById("cheka").value


// let obj={


// }

// let balo=document.getElementById("ballo")
// let input=document.querySelector("#name")
// input.oninput=fal
// function fal(){


//   let namei=document.getElementById("name").value
//   let lasti=document.getElementById("last").value
//   let Address1i=document.getElementById("address1").value
//   let Address2i=document.getElementById("address2").value
//   let countryi=document.getElementById("country").value
//   let cityi=document.getElementById("city").value
//   let statei=document.getElementById("state").value
//   let codei=document.getElementById("code").value
//   let numberi=document.getElementById("no").value

// let spa=document.querySelector(".sab")
// // let cari=0
// let ballo=document.getElementById("ballo")

// if(namei.length>0 && lasti.length>0 && Address1i.length>0 && Address2i.length>0 && cityi.length>0&& codei.lengt>0 && numberi.length>0){
//   ballo.style.oipacity="1"
//   spa.style.display="none"
// }


// }
  









let Data=[]
let kato=0

function spenta(){
  let name=document.getElementById("name").value
  let last=document.getElementById("last").value
  let Address1=document.getElementById("address1").value
  let Address2=document.getElementById("address2").value
  let country=document.getElementById("country").value
  let city=document.getElementById("city").value
  let state=document.getElementById("state").value
  let code=document.getElementById("code").value
  let number=document.getElementById("no").value
  // let check=document.getElementById("cheka").value
  
  
 
  
  // let obj={
  
  
  // }
  let ballo=document.getElementById("ballo")
  let obj={
    name:name+" "+last,
    Address1:Address1,
    Address2:Address2,
    country:country,
    city:city,
    state:state,
    code:code,
    number:number
    

  }
  let counta=0
  Data.push(obj)
  localStorage.setItem("loki",JSON.stringify(Data))
  for(var key in obj){
    if(obj[key]!=""){
      counta++
    }
  }
  console.log(Object.keys(obj).length)
  if(counta==Object.keys(obj).length){
    ballo.classList.add("active")
  }
  else{
    ballo.classList.remove("active")
  }
  
  
  
  
  let spa=document.querySelector(".sab")
  // let cari=0

  
  
  
  
  







 
 if(name=="" || last=="" || Address1=="" || Address2=="" || country=="" || city=="" || state=="" || code=="" || number==""){
  spa.classList.add("active")
  console.log(name)
  

 }

 

else{
  spa.classList.remove("active")
  setTimeout(() => {
    window.location.href="./2.html"
  },2500);
 

 
}




}

document.getElementById("ballo").addEventListener("click",spenta)





