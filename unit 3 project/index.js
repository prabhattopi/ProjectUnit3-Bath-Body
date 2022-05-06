import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
document.getElementById("footermainpagewrapperfun").innerHTML=footer();
document.getElementById("navhomepage").innerHTML=navbar();



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
