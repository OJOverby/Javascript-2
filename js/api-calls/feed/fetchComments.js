import { BASE_API } from "../../api/api.js";
import { API_KEY } from "../../api/api-key.js"
import { load } from "../../functions/load.js";


export async function fetchComments (id) {
    const response = await fetch(BASE_API+"/social/posts/"+id+"?_comments=true", {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY
        }
      
    });
    return await response.json();
}

