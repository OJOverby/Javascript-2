import { fetchUser } from "../fetchUser.js";
import { load } from "../../functions/load.js";
export async function checkIfFollows (userProfile) {
        const profile = load("profile");
       console.log(profile);
       const profileName = profile.name;
    const userData = await fetchUser(profileName+"?_following=true");
    console.log(userData);
    const followButton = document.querySelector("#follow-button");
    const isFollowing = userData.data.following.some(user => user.name == userProfile);
    if (isFollowing) {
        followButton.textContent = "Unfollow";
        followButton.classList.remove("btn-primary");
        followButton.classList.add("btn-danger");
    } 
}