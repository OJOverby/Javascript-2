import { fetchPosts } from "../api-calls/fetchPosts.js";
import { fetchComments } from "../api-calls/fetchComments.js";
import { renderComments } from "./renderComments.js";

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
    //const comments = await fetchComments(postID);
    renderComments(postID);
    //console.log(comments);
}

