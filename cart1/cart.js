
import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
document.getElementById("cartPageNavbar").innerHTML=footer();
document.getElementById("cartPageFooter").innerHTML=navbar();

var cartData = JSON.parse(localStorage.getItem("cart"))||[]

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

let na=document.querySelector("nav")
let scrollPrevious=window.pageYOffset;
window.onscroll=function(){
    let scrollCurrent=window.pageYOffset;
    if(scrollPrevious>scrollCurrent){
        na.style.top="50px";

    }
    else{
        na.style.top="-90px"
    }
    scrollPrevious=scrollCurrent
}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


 let carobj = [
    {
        image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?yocs=o_s_",
        title: "SANDALWOOD EUCALYPTUS MANDARIN",
        category: "Body Wash and Foam Bath",
        offer: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
        price: 17.00

    },
    {
        image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?yocs=o_s_",
        title: "SANDALWOOD EUCALYPTUS MANDARIN",
        category: "Body Wash and Foam Bath",
        offer: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
        price: 17.00

    }, {
        image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?yocs=o_s_",
        title: "SANDALWOOD EUCALYPTUS MANDARIN",
        category: "Body Wash and Foam Bath",
        offer: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
        price: 17.00

//     },
//     // {
//     //     image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?yocs=o_s_",
//     //     title: "SANDALWOOD EUCALYPTUS MANDARIN",
//     //     category: "Body Wash and Foam Bath",
//     //     offer: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
//     //     price: 17.00

//     // },
//     // {
//     //     image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?yocs=o_s_",
//     //     title: "SANDALWOOD EUCALYPTUS MANDARIN",
//     //     category: "Body Wash and Foam Bath",
//     //     offer: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
//     //     price: 17.00

//     // }, {
//     //     image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?yocs=o_s_",
//     //     title: "SANDALWOOD EUCALYPTUS MANDARIN",
//     //     category: "Body Wash and Foam Bath",
//     //     offer: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
//     //     price: 17.00

 }
 ]

// image: "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-master-catalog/default/dwe52c7f04/crop/026403504_crop.jpg?yocs=o_s_",
//         title: "SANDALWOOD EUCALYPTUS MANDARIN",
//         category: "Body Wash and Foam Bath";
//         offer: "Mix & Match: Buy 3, Get 3 Free or Buy 2, Get 1 Free",
//         price: 17.00

// localStorage.setItem("cart", JSON.stringify(carobj));
let cartPagedata = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartPagedata)
displayData(cartPagedata)
// let cartPagedata1 = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartPagedata1)

let lengthProducts = cartPagedata.length;
document.getElementById("noofprodinCart").innerText = lengthProducts;
if(lengthProducts===0){
    document.getElementById("cartProductDetails").innerHTML = null
}


var priceOfItems = cartPagedata.reduce(function (acc, elem){
    return acc+Number(elem.price);
},0)


document.querySelector("#subtotal").innerText="$"+priceOfItems.toFixed(2)
document.querySelector("#ordeTotal").innerText = `$${priceOfItems + 6.99 + 2.15}`

function displayData(cartPagedata) {
  
    document.getElementById("cartProductDetails").innerHTML = null
    cartPagedata.forEach(function(elem,index){
        let mainDiv = document.createElement("div")
        let detailDiv = document.createElement("div")
        let priceDiv = document.createElement("div")
        let wislistDiv = document.createElement("div")
        let incDecDiv = document.createElement("div")
        let teachProdTotal = document.createElement("p")
        let removeSym = document.createElement("p")

           removeSym.innerText = "❌"
        removeSym.setAttribute("id", "removeBtn")
        removeSym.addEventListener("click", function () {
            removeFunc(elem, index)
        })
       

        
        let numberP = document.createElement("p")
        numberP.innerText = 1;
        numberP.setAttribute("id" ,"coutner")

        let incP = document.createElement("p")
        incP.innerText = "+"
        

        incP.style.color = "black"
        let decP = document.createElement("p")
        decP.innerText = "―"
          


        incDecDiv.append(decP, numberP, incP)
        incDecDiv.setAttribute("id", "incDecDiv")

        wislistDiv.setAttribute("id", "wislistDiv")

        let image1 = document.createElement("img")
        let title1 = document.createElement("p")
        let category1 = document.createElement("p")
        let offer1 = document.createElement("p")
        let price1 = document.createElement("p")
        let promotion = document.createElement("p")

        let wislist = document.createElement("p")
        let wislistimg = document.createElement("img")
        wislistimg.setAttribute("id", "wishimg")
        wislistimg.src = "https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw31d078c5/images/svg-icons/PDP-Wishlist-4.svg?yocs=o_s_"
        wislist.innerText = " Add to My Love-It List"
        wislist.setAttribute("id", "wishlistPara")
        promotion.innerText = "Promotional Details"
        promotion.setAttribute("id", "promo")


        image1.src = elem.image;
        title1.innerText = elem.name;
        category1.innerText = elem.about;
        offer1.innerText = elem.discount;

        price1.innerText ="$"+Number(elem.price).toFixed(2)
        price1.style.fontSize = "16px";
        price1.style.marginLeft = "150px"

        teachProdTotal.innerText = "$" + (elem.price * parseInt(numberP.innerText)).toFixed(2)
        teachProdTotal.setAttribute("id", "teachProdTotal")
        wislistDiv.append(wislistimg, wislist)
        detailDiv.append(image1, title1, category1, offer1, promotion, wislistDiv)
        priceDiv.append(price1)

        mainDiv.append(image1, detailDiv, priceDiv, incDecDiv, teachProdTotal, removeSym)
        document.getElementById("cartProductDetails").append(mainDiv)
    })
}

function removeFunc(elem, index) {
    console.log(elem)
    cartPagedata.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cartPagedata))
    let lengthProducts = cartPagedata.length;
    document.getElementById("noofprodinCart").innerText = lengthProducts;
    var priceOfItems = cartPagedata.reduce(function (acc, elem){
        return acc+elem.price;
    },0)
    
    
    document.querySelector("#subtotal").innerText= `$${priceOfItems.toFixed(2)}`
    document.querySelector("#ordeTotal").innerText = `$${priceOfItems + 6.99 + 2.15}`
    displayData(cartPagedata)
  
}


// incrementFunc = (count) =>{
//     count++
//     let numberP = document.createElement("p")
//     numberP.innerText = count;

// } 

// decrementFunc = (count) =>{
//     count--
//     let numberP = document.createElement("p")
//     numberP.innerText = count;

// } 