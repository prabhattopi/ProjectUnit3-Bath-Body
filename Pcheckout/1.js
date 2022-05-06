import { checkout } from "../components/checkoutnavbar.js";

let navbari=document.getElementById("Thanos")
navbari.innerHTML=checkout()


$(window).on("load",function(){
    $(".heart").fadeOut(1000);
    $("#Thanos").fadeIn(1000)
})