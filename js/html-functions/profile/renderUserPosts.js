import { fetchUserPosts } from "../../api-calls/profile/fetchUserPosts.js";

export async function renderUserPosts(){

    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("profile");
  const posts = await fetchUserPosts(id);
  const container = document.querySelector("#posts-container");
  container.innerHTML = "";
  
  posts.forEach(function(post){
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
      <h3>${post.title || 'Untitled post'}</h3>
      <p>${post.body || 'No post text'}</p>
        <img class="img-fluid post-img" src="${post.media?.url || '../../images/placeholder.jpeg'}" alt="${post.media?.alt || 'Post Image'}" />
      <h5>${post.tags ? post.tags.map(tag => `<a href="/feed/tags.html?tag=${(tag)}">#${tag}`).join('  ') : ''}</a></h5>
  `;

  container.appendChild(postElement);
})
}

renderUserPosts();