
import {navbar}  from "../../components/navbar.js"







// let na=document.querySelector("nav")
// let scrollPrevious=window.pageYOffset;
// window.onscroll=function(){
//     let scrollCurrent=window.pageYOffset;
//     if(scrollPrevious>scrollCurrent){
//         na.style.top="50px";

//     }
//     else{
//         na.style.top="-90px"
//     }
//     scrollPrevious=scrollCurrent
// }







let nav_container=document.getElementById("navhomepage")
nav_container.innerHTML= navbar()





 //console.log(mensData)

 let cart = JSON.parse(localStorage.getItem("cart")) || []

 


 let conta = document.getElementById("productshra").innerHTML = ""

 let data =mensData .map((el,index)=>{


const appendData =  (data1)=>{
    let conta = document.getElementById("productshra").innerHTML = ""
    data1.map((el)=>{
        
    let div = document.createElement("div");
    div.id="divshr"
    

    let image = document.createElement("img");
    image.src = el.image ;
    image.addEventListener("click",function(){
        adddetails(el)
    })

    let ana = document.createElement("div");
    ana.id = "anna";
    ana.style.lineHeight="25px"

    let name = document.createElement("h3");
    name.innerText = el.name ;
    name.style.color = "#333333";
    name.style.fontSize = "16px"


    let about = document.createElement("p");
    about.innerText = el.about ;
    about.style.color = "#666666";
    about.style.fontSize = "13px"

    let price = document.createElement("h3");
    price.innerText = "$"+el.price ;
    price.style.color = "#333333";


    let discount = document.createElement("p");
    discount.innerText = el.discount ;
    discount.style.color = "#bd1906";
    discount.style.fontSize = "11px"

    let btn = document.createElement("button");
    btn.innerText = "ADD TO BAG";
    btn.id = "btnshr"
    btn.addEventListener("click",function(){
        addtocart(el)
    })
     
    ana.append(name,about,price,discount)
    div.append(image,ana,btn);
    document.getElementById("productshra").append(div) ;
    })
}


const getdata = ()=>{
    let data = JSON.parse(localStorage.getItem("pages"));
    console.log(data)
    let data1 = data[data.length-1]
    console.log(data1)
    let dataa = JSON.parse(localStorage.getItem(`${data1}`))
    // console.log(mensData)
    appendData(dataa)
}

getdata()
// console.log(navbar())










 //console.log(mensData)

 let cart = JSON.parse(localStorage.getItem("cart")) || []

 








 

function adddetails(el){
    let details = []
    details.push(el)
    localStorage.setItem("product_det",JSON.stringify(details))
    window.location.href="./product_details/product_details.html"
    //console.log(details)
}
function addtocart(el){
    cart.push(el);
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)

}




