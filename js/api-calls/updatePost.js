import { BASE_API } from "../api/api.js";
import { load } from "../functions/load.js";
import { API_KEY } from "../api/api-key.js";
export async function updatePost (id, title, body, imgUrl, imgAlt) {
  const endpoint = "/social/posts/";
  const response = await fetch(BASE_API + endpoint + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY
    },
    method: "PUT",
    body: JSON.stringify({
      "title": title,
      "body": body,
      "media": {
      "url": imgUrl,
      "alt": imgAlt
  }
    }),
  });
  if (response.ok) {
    return await response.json();
  }
   throw new Error("Could not update post")
}
