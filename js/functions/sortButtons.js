import { renderPosts } from "../html-functions/renderPosts.js";

export async function sortButtons(){
    document.querySelectorAll(".dropdown-item").forEach((item) => {
        item.addEventListener("click", async (event) => {
          event.preventDefault();
          const sortOrder = event.target.getAttribute("data-sort");
          console.log(sortOrder);
          const endpoint = "/social/posts?_author=true&sortOrder="+sortOrder;

          renderPosts(endpoint);
        });
      });
}

sortButtons();

