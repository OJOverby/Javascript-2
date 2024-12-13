
import { fetchPosts } from "./fetchPosts.js";


export async function fetchUserPosts (userName) {
    const endpoint = "/social/profiles/"+userName+"/posts";
    console.log(userName);
    const posts = await fetchPosts(endpoint)
    console.log(posts);

    return posts.data;
}

