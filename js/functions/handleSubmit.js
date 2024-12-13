import { registerUser } from "../api-calls/registerUser.js"

export async function handleSubmit (name, email, password) {
  await registerUser(name, email, password);
  console.log(name, email, password);
    console.log("Registration successfull")
}