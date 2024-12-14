import { load } from "../functions/load.js";
import { BASE_API } from "../api/api.js";
import { API_KEY } from "../api/api-key.js";

export async function loggedInCheck() {
  const token = load("token");

  if (!token) {
    return false;
  }

  try {
    const response = await fetch(BASE_API + "/social/posts/", {
       headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
        "Content-Type": "application/json",
              },
      method: "GET",
    });

    if (response.ok) {
        window.location.href = "/feed/index.html";
      return true; 
    }
  } catch (error) {
    console.error("Error validating token:", error);
  }
  return false;
}
loggedInCheck();


