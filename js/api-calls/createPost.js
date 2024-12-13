import { BASE_API } from "../api/api.js";
import { load } from "../functions/load.js";
import { handlePost } from "../functions/handlePost.js";
import { API_KEY } from "../api/api-key.js";



export async function createPost () {
  const postData = await handlePost();
  const response = await fetch(BASE_API + "/social/posts", {
    headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(postData)
  });
  if (response.ok) {
    return await response.json();
  }
   throw new Error("Could not create post")
}
