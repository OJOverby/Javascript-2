import { fetchPosts } from "../api-calls/fetchPosts.js";
import { fetchComments } from "../api-calls/fetchComments.js";
import { renderComments } from "./renderComments.js";
import { commentOnPost } from "../api-calls/commentOnPost.js";

export async function renderPost(postID){
const endpoint = "/social/posts/"+postID;
  const post = await fetchPosts(endpoint);
  const container = document.querySelector("#postModalBody");
  container.innerHTML = "";
  console.log(post)
  
    container.innerHTML = `
      <h3>${post.data.title || 'Untitled post'}</h3>
      <p>${post.data.body || 'No post text'}</p>
        <img class="img-fluid post-img" src="${post.data.media?.url || '../../images/placeholder.jpeg'}" alt="${post.media?.alt || 'Post Image'}" />
      <h5>${post.tags ? post.tags.map(tag => `<a href="index.html?tag=${(tag)}">#${tag}`).join('  ') : ''}</h5>
    
  `;
  const commentButton = document.getElementById("comment-button");
  commentButton.addEventListener("click", (event) => {
    event.preventDefault();
    const comment = document.getElementById("comment").value;
    commentOnPost(postID, comment);
    window.location.reload()


});
    renderComments(postID);
}

