import { BASE_API } from "../api/api.js";
import { load } from "../functions/load.js";
import { API_KEY } from "../api/api-key.js";
export async function commentOnPost (id, comment) {
  const endpoint = "/social/posts/"+id+"/comment";
  const response = await fetch(BASE_API + endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY
    },
    method: "POST",
    body: JSON.stringify({ body: comment }),
  });
  if (response.ok) {
    return await response.json();
  }
   throw new Error("Could not comment")
}