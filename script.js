"use strict";

// JS-12
document.getElementById("usernameForm").addEventListener("click", validateUsername);

function validateUsername() {
    let usernameInput = document.getElementById("username").value;
    let usernameErrorSpan = document.getElementById("usernameError");
  
    if (usernameInput.length < 3 || usernameInput.length > 20) {
        usernameErrorSpan.textContent = "Username should be between 3 and 20 characters long.";
        return false;
    }

    if (!/^[a-zA-Z0-9_]+$/.test(usernameInput)) {
        usernameErrorSpan.textContent = "Username should contain only letters, numbers, and underscores.";
        return false; 
    }   

    if (usernameInput === "") {
        usernameErrorSpan.innerHTML = ""; 
    }  
    
    usernameErrorSpan.textContent = "Username is valid!";
    preventDefault();
    return true;
}
