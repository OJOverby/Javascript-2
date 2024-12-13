/* import { API_AUTH, API_KEY_URL, BASE_API } from "../api/api.js";
import { load } from "../functions/load.js";

export async function getAPIKEY() {
    const response = await fetch(BASE_API+API_AUTH+API_KEY_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${load("token")}`
        },
        body: JSON.stringify({
            name: "API Key"
        })
    });

    if(response.ok) {
        return await response.json();
    }
}

(async () => {
    const apiKeyData = await getAPIKEY();
    console.log(apiKeyData); // Log the result (or null in case of an error)
})();

 */