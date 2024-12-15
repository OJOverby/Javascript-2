import { fetchPosts } from "../../api-calls/feed/fetchPosts.js";
import { renderPost } from "./renderPost.js";
const endpoint = "/social/posts?_author=true";

export async function renderPosts(endpoint){
  const posts = await fetchPosts(endpoint);
  const container = document.querySelector("#posts-container");
 
  container.innerHTML = "";
  
  posts.data.forEach(function(post){
    const postElement = document.createElement("div");
    const postAuthor = post.author.name;
    postElement.classList.add(
      "col-12",
      "col-md-5",
      "p-1",
      "hover-element",
      "position-relative",
      "shadow",
      "mt-2"
    );
    postElement.innerHTML = `
      <div class="d-flex border-bottom p-1"><a class="d-flex" href="/userprofile/index.html?profile=${post.author.name}">
      <img
                  src="${post.author.avatar.url}"
                  class="rounded-circle profile-icon"
                  alt="${post.author.alt}"
                /><h5 class="ms-1">${post.author.name || 'Unknown User'}</h5>
                </a>
      </div>
      <div data-id="${post.id}" class="postItem" data-bs-toggle="modal" data-bs-target="#postModal">
      <h3>${post.title || 'Untitled post'}</h3>
      <p>${post.body || 'No post text'}</p>
        <img class="img-fluid post-img" src="${post.media?.url || '../../images/placeholder.jpeg'}" alt="${post.media?.alt || 'Post Image'}" />
      <h5>${post.tags ? post.tags.map(tag => `<a href="tags.html?tag=${(tag)}">#${tag}`).join('  ') : ''}</a></h5>
      <div>
        <i class="bi bi-chat position-relative"></i>
            <span id="commentCount">${post._count.comments+' comments' || 'No comments'}</span>
      </div>
    </div>
  `;
  postElement.dataset.id = post.id;
  postElement.addEventListener("click", () => {
      renderPost(post.id, postAuthor);
  });
  container.appendChild(postElement);
})

}

renderPosts(endpoint);

