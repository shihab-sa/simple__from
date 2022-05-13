let forms = document.getElementById("form")
let userName = document.getElementById("username")
let myemail = document.getElementById("email")
let mypassword = document.getElementById("password")
let mypassword2 = document.getElementById("password2")

function showError(inpt,message){
    const formControl = inpt.parentElement;
    formControl.className = "form__control error"
    const small = formControl.querySelector("small")
    small.innerText = message
}


function isValidEmail(email){
    const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return re
}


function showSuccess(inpt,message){
    const formControl = inpt.parentElement;
    formControl.className = "form__control success"
   

}


function showrequired(inputArry){
    inputArry.forEach(function(input){
        if(input.value.trim()==""){
            showError(input,`${input.id} is wrong`)
        }
        else{
            showSuccess(input)
        }
    })

}



// event listeners

forms.addEventListener("submit",function(e){
    e.preventDefault()
    

    showrequired([ userName,myemail,mypassword,mypassword2])
})