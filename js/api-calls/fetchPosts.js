import { BASE_API } from "../api/api.js";
import { API_KEY } from "../api/api-key.js"
import { load } from "../functions/load.js";
const endpoint = "/social/posts?_author=true";


export async function fetchPosts (endpoint) {
    const response = await fetch(BASE_API+endpoint, {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY
        }
    });
    return await response.json();
}

const posts = await fetchPosts(endpoint);
console.log(posts);