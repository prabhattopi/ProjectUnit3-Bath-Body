import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
document.getElementById("footermainpagewrapperfun").innerHTML=footer();
document.getElementById("navhomepage").innerHTML=navbar();

<<<<<<< HEAD


let na=document.querySelectorAll(".conta")
let scrollPrevious=window.pageYOffset;
window.onscroll=function(){
    let scrollCurrent=window.pageYOffset;
    if(scrollPrevious>scrollCurrent){
        na.style.top="10px";
=======
let na=document.querySelector("nav")
let scrollPrevious=window.pageYOffset;
window.onscroll=function(){
    let scrollCurrent=window.pageYOffset;
    if(scrollPrevious >scrollCurrent){
        na.style.top="50px"
>>>>>>> master

    }
    else{
        na.style.top="-90px"
<<<<<<< HEAD

=======
>>>>>>> master
    }
    scrollPrevious=scrollCurrent
}
