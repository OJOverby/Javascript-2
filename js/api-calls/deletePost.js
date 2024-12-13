import { BASE_API } from "../api/api.js";
import { load } from "../functions/load.js";
import { API_KEY } from "../api/api-key.js";

export async function deletePost (id) {
  const response = await fetch(BASE_API + "/social/posts/"+id, {
    headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json",
    },
    method: "DELETE",
  });
  if (response.ok) {
    return await response.json();
  }
   throw new Error("Could not delete post")
}