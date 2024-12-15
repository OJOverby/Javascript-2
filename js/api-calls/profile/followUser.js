import { BASE_API } from "../../api/api.js";
import { load } from "../../functions/load.js";
import { API_KEY } from "../../api/api-key.js";

export async function followUser (userName, followStatus) {
  const endpoint = "/social/profiles/";
  const response = await fetch(BASE_API + endpoint + userName + followStatus, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY
    },
    method: "PUT",
    
  });
  if (response.ok) {
    return await response.json();
  }
   throw new Error("Could not follow user")
}

