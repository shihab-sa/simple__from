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


function showSuccess(inpt,message){
    const formControl = inpt.parentElement;
    formControl.className = "form__control success"
   

}



// event listeners

forms.addEventListener("submit",function(e){
    e.preventDefault()
    if(userName.value === ''){
        showError(userName,'usename is required')
    }
    else{
        showSuccess(userName)
    }

    if(email.value === ''){
        showError(email,'email is required')
    }
    else{
        showSuccess(email)
    }

    if(mypassword.value === ''){
        showError(mypassword,'usename is required')
    }
    else{
        showSuccess(mypassword)
    }

    if(password2.value === ''){
        showError(mypassword2,'usename is required')
    }
    else{
        showSuccess(mypassword2)
    }
})