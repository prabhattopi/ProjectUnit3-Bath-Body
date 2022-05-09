

document.getElementById("loginBtn").addEventListener("click", startLogin)

function startLogin(){
    let email = document.getElementById("loginEmailVal").value
    let password = document.getElementById("loginPassVal").value
    if(email === "" || password === ""){
        alert("Invalid Email or Password")
    }
    else{
        let input = {
            email: email,
            password: password
        }
    
        fetch(`https://bath-and-body-mock-server.herokuapp.com/users`).then(response => response.json()).then(data => verifyLogin(data, input)).catch(error => console.log(error))
    
        function verifyLogin(data, input){
            const info = data.find(user => (user.email === input.email && user.password === input.password))
            if(info === undefined){
                alert("Invalid Email or Password")
            }
            else{
                setToLS(info)
            }
        }
    }
}

function setToLS(info){
    let fname = info.Fname
    let lname = info.Lname
    let city = info.city
    let email = info.email
    let password = info.password
    let phone = info.phone
    let state = info.state
    let street = info.street
    let zipcode = info.zipcode

    let userDetails = {}
    userDetails.fname = fname
    userDetails.lname = lname
    userDetails.city = city
    userDetails.email = email
    userDetails.password = password
    userDetails.phone = phone
    userDetails.state = state
    userDetails.street = street
    userDetails.zipcode = zipcode

    localStorage.setItem("user", JSON.stringify(userDetails));

    window.location.href="../index.html"
}

document.getElementById("createAccount").addEventListener("click", function(){
    window.location.href = "signup.html";
});

// prabhat js code

