import { fetchMyPosts } from "../../api-calls/profile/fetchMyPosts.js";
import { postInputValues } from "../../functions/postInputValues.js";
import { deletePost } from "../../api-calls/profile/deletePost.js";


export async function renderMyPosts(){
  const posts = await fetchMyPosts();
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
      <button class="btn btn-primary mb-3 modal-button"  data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#postUpdateModal">Edit Post</button>
      <button class="btn btn-danger mb-3 delete-button" data-id="${post.id}">Delete Post</button>

  `;

  container.appendChild(postElement);
})

const editButtons = document.querySelectorAll(".modal-button");

editButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const postId = event.target.getAttribute("data-id");
    console.log("Post ID:", postId);
    postInputValues(postId);

  });
});
const deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const postId = event.target.getAttribute("data-id");
    console.log("Post ID:", postId);
    const confirmDelete = confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      deletePost(postId);
      window.location.reload()
    }

  });
});

}

renderMyPosts();

