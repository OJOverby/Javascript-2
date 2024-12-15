
import { load } from "../../functions/load.js";
import { fetchPosts } from "../feed/fetchPosts.js";


export async function fetchMyPosts () {
    const profile = load("profile");
    const userName = profile.name;
    const endpoint = "/social/profiles/"+userName+"/posts";
    console.log(userName);
    const posts = await fetchPosts(endpoint)
    console.log(posts);

    return posts.data;
}

