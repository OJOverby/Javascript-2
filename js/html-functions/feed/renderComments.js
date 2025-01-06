
import { fetchComments } from "../../api-calls/feed/fetchComments.js";

export async function renderComments(id){
  const comments = await fetchComments(id);
  const container = document.querySelector("#comment-container");
  console.log(comments.data.comments);
  container.innerHTML = "";
  
  comments.data.comments.forEach(function(comment){
    const commentElement = document.createElement("div");
    commentElement.classList.add(
      "p-1",
      "position-relative",
      "shadow",
      "m-2"
    );
    commentElement.innerHTML = `
      <h5 class="ms-1">${comment.author.name || 'Unknown User'}</h5>
      <p class="mt-1">${comment.body || 'No post text'}</p>
  `;
  container.appendChild(commentElement);

})

}

