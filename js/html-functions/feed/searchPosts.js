import { fetchPosts } from "../../api-calls/feed/fetchPosts.js";
import { renderPost } from "./renderPost.js";
const endpoint = "/social/posts/search?q=";

export async function searchPosts(endpoint){
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search');

  const posts = await fetchPosts(endpoint+searchTerm);
  const container = document.querySelector("#posts-container");
  console.log(posts);

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

      <div data-id="${post.id}" class="postItem" data-bs-toggle="modal" data-bs-target="#postModal">
      <h3>${post.title || 'Untitled post'}</h3>
      <p>${post.body || 'No post text'}</p>
        <img class="img-fluid post-img" src="${post.media?.url || '../../images/placeholder.jpeg'}" alt="${post.media?.alt || 'Post Image'}" />
      <h5>${post.tags ? post.tags.map(tag => `<a href="tags.html?tag=${(tag)}">#${tag}`).join('  ') : ''}</a></h5>
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

searchPosts(endpoint);

