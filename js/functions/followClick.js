import { followUser } from "../api-calls/profile/followUser.js";

export async function followClick(userName) {
const followButton = document.querySelector("#follow-button");
followButton.addEventListener("click", async () => {


    if (followButton.textContent == "Follow") {
        await followUser(userName, "/follow");
        followButton.textContent = "Unfollow";
        followButton.classList.remove("btn-primary");
        followButton.classList.add("btn-danger");
        window.location.reload()

        
    } else {
        await followUser(userName, "/unfollow");
        followButton.textContent = "Follow";
        followButton.classList.remove("btn-danger");
        followButton.classList.add("btn-primary");
        window.location.reload()

    }
});

}