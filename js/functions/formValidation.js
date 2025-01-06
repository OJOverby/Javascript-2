// Form validation for the register.html page

import { handleSubmit } from "./handleSubmit.js"

const form = document.querySelector("#registerForm");
const email = document.querySelector("#email");
const name = document.querySelector("#userName");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const successMsg = document.querySelector("#successMessage");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!validateEmail(email.value)) {
        email.setCustomValidity("You must enter a valid Noroff email address.");
    }  else {
        email.setCustomValidity("");
        
    }

    if (password.value !== password2.value) {
        password2.setCustomValidity("Passwords do not match");
    } else {
        password2.setCustomValidity("");
    }
    if (form.checkValidity()) {
        form.classList.add("was-validated");
        await handleSubmit(name.value, email.value, password.value);
        window.location.reload()
        successMsg.style.display = "block";
    } else {
        form.classList.add("was-validated");
        console.log("Form contains invalid fields.");
    }
});

function validateEmail(email) {
    const regEx = /^[a-zA-Z0-9._%+-]+@(noroff\.no|stud\.noroff\.no)$/;
    return regEx.test(email);
}

console.log(form);

