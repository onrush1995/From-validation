const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const smalll = formControl.querSelector("small");
    smalll.innerText = message;
}

// Show success outline 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Event Listener
form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("submit");

    if(username.value === ""){
        showError(username, "username is required");
    } else{
        showSuccess(username);
    }

    
});