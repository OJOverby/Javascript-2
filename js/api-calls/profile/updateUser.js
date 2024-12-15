import { BASE_API } from "../../api/api.js";
import { load } from "../../functions/load.js";
import { API_KEY } from "../../api/api-key.js";
export async function updateUser (id, bio, avatarUrl, avatarUrlAlt) {
  const endpoint = "/social/profiles/";
  const response = await fetch(BASE_API + endpoint + id, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY
    },
    method: "PUT",
    body: JSON.stringify({
      "bio": bio,
      "avatar": {
      "url": avatarUrl,
      "alt": avatarUrlAlt
  }
    }),
  });
  if (response.ok) {
    return await response.json();
  }
   throw new Error("Could not update account")
}

