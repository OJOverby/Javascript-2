
import { createPost } from "../api-calls/createPost.js";
import { load } from "./load.js";
const form = document.querySelector("#post-form");

export async function handlePost(event) {
    const profileData = load("profile");
    const postTitle = document.querySelector("#postTitle").value;
    const postBody = document.querySelector("#post-form textarea").value;
    const imageURL = document.querySelector("#imageURL").value;
    const imageAlt = document.querySelector("#imageAlt").value;
    const tags = document.querySelector("#tags").value;
    const tagsArray = tags.split(",").map(tag => tag.trim());


    const postData = {
        "title": postTitle,
        "body": postBody,
        "tags": tagsArray,
        "media": {
            "url": imageURL,
            "alt": imageAlt,
        },
        "author": profileData

    }
    return postData;
};

export function postListener() {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      try {
        const postData = await handlePost();
        const response = await createPost(postData);
        form.reset();
      } catch (error) {
      }
    });
  }


postListener();