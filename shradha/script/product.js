
// import {navbar}  from "../components/navbar.js"

// let nav_container=document.getElementById("navhomepage")
// nav_container.innerHTML= navbar()

// let app = JSON.parse(localStorage.getItem("pages"))
// console.log(app)


let dataArr = JSON.parse(localStorage.getItem("pages")) || [] 

function myFunction() {
    dataArr.push("mens")
    console.log(dataArr)
   localStorage.setItem("pages",JSON.stringify(dataArr))
   window.location.href = "../shradha/product.html"
   
}
function sanitizer(){
    dataArr.push("santitazer");
    localStorage.setItem("pages",JSON.stringify(dataArr))
    window.location.href = "../shradha/product.html"
}

function handshoap (){
    dataArr.push("hand_soap");
    localStorage.setItem("pages",JSON.stringify(dataArr))
    window.location.href = "../shradha/product.html"
}

function carfarg(){
    dataArr.push("car_frangrance");
    localStorage.setItem("pages",JSON.stringify(dataArr))
    window.location.href = "../shradha/product.html"
}


function homefrag(){
    dataArr.push("newhome_fr");
    localStorage.setItem("pages",JSON.stringify(dataArr))
    window.location.href = "../shradha/product.html"
}





// console.log(navbar())

const appendData =  (data1)=>{
    

    let co = document.getElementById("productshra") ;
    co.innerHTML = ""
    // var container = document.querySelector("#productshra")
   
    // container.innerHTML = ""
   
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
    // console.log(data)
    let data1 = data[data.length-1]
     console.log(data1)
    let dataa = JSON.parse(localStorage.getItem(`${data1}`))
    // console.log(dataa)
    // console.log(mensData)
    appendData(dataa)
}

getdata()





 //console.log(mensData)

 let cart = JSON.parse(localStorage.getItem("cart")) || []

 


   





 

function adddetails(el){
    let details = []
    details.push(el)
    localStorage.setItem("product_det",JSON.stringify(details))
    window.location.href = "../shradha/productdetails.html"
    
    //console.log(details)
}
function addtocart(el){
    cart.push(el);
    localStorage.setItem("cart",JSON.stringify(cart))
    console.log(cart)
    
    window.location.reload();
    len(cartData)

}
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







document.getElementById("sort_by").addEventListener("change",function(){
    pricesort()
})


function pricesort(){
    
    let data = JSON.parse(localStorage.getItem("pages"));
    let data1 = data[data.length-1]
    let dataa = JSON.parse(localStorage.getItem(`${data1}`))
    
     console.log(dataa)
    let selected = document.querySelector("#sort_by").value;
     if (selected == "high"){

        dataa.sort(function(a, b){
        return Number(b.price)-Number(a.price)
      });
     }
     if (selected == "low"){

        dataa.sort(function(a, b){
        return Number(a.price)-Number(b.price)
        });
    }
      if(selected == "random"){
        dataa.sort(function(a, b){
            return Number(b.price)-Number(a.price)
          });
          
      }  

      
    // console.log(dataa);
    appendData(dataa)
      

    }

    








         

    