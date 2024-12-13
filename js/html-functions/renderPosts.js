import { fetchPosts } from "../api-calls/fetchPosts.js";
import { renderPost } from "./renderPost.js";
const endpoint = "/social/posts?_author=true";

export async function renderPosts(endpoint){
  const posts = await fetchPosts(endpoint);
  const container = document.querySelector("#posts-container");
 
  container.innerHTML = "";
  
  posts.data.forEach(function(post){
    const postElement = document.createElement("div");
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
      <h5>${post.tags ? post.tags.map(tag => `<a href="index.html?tag=${(tag)}">#${tag}`).join('  ') : ''}</a></h5>
    </div>
    <div>
      <h2>
        <i class="bi bi-hand-thumbs-up"></i>
        <i class="bi bi-chat position-relative">
            <span class="position-absolute top-50 start-50 translate-middle" id="commentCount">${post._count.comments || ''}</span>
        </i>
      </h2>
    </div>
  `;
  postElement.dataset.id = post.id;
  postElement.addEventListener("click", () => {
      renderPost(post.id);
  });
  container.appendChild(postElement);
})

}

renderPosts(endpoint);

