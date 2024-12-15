
import { load } from "../../functions/load.js";
import { fetchPosts } from "../feed/fetchPosts.js";

export async function fetchMyPosts () {
    const profile = load("profile");
    const userName = profile.name;
    const endpoint = "/social/profiles/"+userName+"/posts";
    const posts = await fetchPosts(endpoint)

    return posts.data;
}

