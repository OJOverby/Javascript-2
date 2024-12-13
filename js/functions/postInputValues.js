import { fetchPosts } from "../api-calls/fetchPosts.js";
import { updatePost } from "../api-calls/updatePost.js";

export async function postInputValues (postID) {
 
    const endpoint = "/social/posts/"+postID;
    const post = await fetchPosts(endpoint);
 

    document.getElementById("updateTitle").value = post.data.title || "Test";
    document.querySelector("#update-form textarea").value = post.data.body || "";
    document.getElementById("updateURL").value = post.data.media?.url || "";
    document.getElementById("updateAlt").value = post.data.media?.alt || "";
    document.getElementById("updateTags").value = post.data.tags?.join(", ") || "";

    const saveUpdateButton = document.getElementById("savePostUpdateButton");

    saveUpdateButton.onclick = async () => {
        const title = document.getElementById('updateTitle').value;
        const body = document.querySelector("#update-form textarea").value;
        const imgUrl = document.getElementById("updateURL").value;
        const imgAlt = document.getElementById("updateAlt").value
    
        try {
          const updatedPost = await updatePost(postID, title, body, imgUrl, imgAlt);
          console.log("Profile updated successfully:", updatedPost);
          const post = await fetchPosts(endpoint);
    
          window.location.reload()

        } catch (error) {
          console.error("Error updating profile:", error.message);
        }
      };
}

