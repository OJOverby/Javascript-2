import { fetchUser } from "../fetchUser.js";
import { load } from "../../functions/load.js";

/**
 * Checks if the current user is following the user profile currently being viewed and changes
 * the follow button to unfollow if it does
 * 
 * @param {string} userProfile - The name of the user profile to check if followed.
 * @const {array} userData - Fetches an array of what users the current user is following
 * @const {object} followButton - The follow button on the viewed profile page
 * @const {boolean} isFollowing - Checks if the profile you are viewing is in the list of users you
 * are following, and returns true if you are
 * 
 */

export async function checkIfFollows (userProfile) {
        const profile = load("profile");
       const profileName = profile.name;
    const userData = await fetchUser(profileName+"?_following=true");
    const followButton = document.querySelector("#follow-button");
    const isFollowing = userData.data.following.some(user => user.name == userProfile);
    if (isFollowing) {
        followButton.textContent = "Unfollow";
        followButton.classList.remove("btn-primary");
        followButton.classList.add("btn-danger");
    } 
}