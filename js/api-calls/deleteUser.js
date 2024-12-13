import { API_AUTH, API_REGISTER, BASE_API } from "../api/api.js";

export async function deleteUser (name, email, password, avatarUrl) {
  const response = await fetch(BASE_API + API_AUTH + API_REGISTER, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "UPDATE",
    body: JSON.stringify({name, email, password})
  });
  if (response.ok) {
    return await response.json();
  }
   throw new Error("Could not register account")
}

