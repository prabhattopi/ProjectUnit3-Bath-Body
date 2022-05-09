let coun=document.querySelector("#orderno")
let Iro=Math.floor(Math.random()*10000000)
coun.innerHTML=":"+Iro

let cato=document.getElementById("bro")
cato.onclick=function(){
    window.location.href="../index.html"
}


// setInterval(() => {
//     let road=document.querySelector(".road")
//     road.classList.add("active")
// },1000);

let audio=new Audio()
        audio.src="./successkafunda.mp3"
        // audio.play()
        setTimeout(audio.play(),100)
        console.log(audio)

        let c=document.querySelector("body")


        setTimeout(() => {
           c.style.display="block"
            
        }, 1000);

