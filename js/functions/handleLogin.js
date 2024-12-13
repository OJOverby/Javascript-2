import { loginUser } from "../api-calls/loginUser.js";


const form = document.querySelector("#loginForm");

export async function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email)
    await loginUser(email, password);
};

export function loginListner () {
    form.addEventListener("submit", handleLogin)
}

loginListner();