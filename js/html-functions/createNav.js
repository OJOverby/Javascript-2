import { load } from "../functions/load.js";

/**
 * Creates the navigationbar and injects it in the nav-container found in the HTML element
 * @function createNav
 * @requires load - Fetches the profile data from local storage
 * @const {HTMLElement} navContainer - The container element for the navigation bar.
 * @const {Object} profile - The profile object fetched from localStorage. 
 * @const {string} profile.avatar.url - The URL of the user's avatar image.
 * @const {string} profile.avatar.alt - The alt text for the user's avatar image.
 */

export function createNav() {
  const navContainer = document.querySelector("#nav-container");
  const profile = load("profile");
  navContainer.innerHTML = `
          <nav class="navbar navbar-expand-md bg-lightblue fixed-top border-bottom-red">
      <div class="container-fluid">
        <a class="navbar-brand" href="../feed/index.html"
          >Noroff Social</a
        >
        <div class="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="../feed/index.html"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                data-bs-toggle="collapse"
                href="#postCollapse"
                role="button"
                aria-expanded="false"
                aria-controls="postCollapse"
                >New Post</a
              >
            </li>
          </ul>
          <form class="d-flex me-3" action="search.html" method="get">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="search-input"
              name="search"
            />
            <button type="submit" id="search-button">SB</button>

          </form>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link p-0" href="../profile/index.html"
                ><img
                  src="${profile.avatar.url}"
                  class="rounded-circle profile-icon"
                  alt="${profile.avatar.alt}"
              /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="collapse fixed-top mt-5" id="postCollapse">
      <div class="bg-lightblue p-3">
        <div class="row justify-content-center">
          <div class="col-lg-6">
           <form class="d-flex flex-column" id="post-form">
      <div class="mb-1">
        <label for="postTitle" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="postTitle"
          placeholder="Enter your post title"
          aria-label="Post Title"
        />
      </div>
      <div class="mb-1">
        <label for="postInfo" class="form-label"></label>
        <textarea
          class="form-control"
          rows="3"
          placeholder="Write your post"
        ></textarea>
      </div>
      <div class="mb-1">
        <label for="imageURL" class="form-label"></label>
        <input
          type="url"
          class="form-control"
          id="imageURL"
          placeholder="Enter image URL"
          aria-label="Image URL"
        />
      </div>
      <div class="mb-1">
        <label for="imageAlt" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="imageAlt"
          placeholder="Enter image text"
          aria-label="Image Alt"
        />
      </div>
      <div class="mb-1">
        <label for="tags" class="form-label"></label>
        <input
          type="text"
          class="form-control"
          id="tags"
          placeholder="Enter tags separated by commas"
          aria-label="Hashtags"
        />
      </div>
      <button type="submit" class="btn btn-primary">Post</button>
    </form>
          </div>
        </div>
      </div>
    </div>

    <div class="collapse fixed-top mt-5" id="searchCollapse">
      <div class="bg-lightblue p-3">
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  

    <nav class="navbar fixed-bottom bg-lightblue d-md-none">
      <div class="container-fluid d-flex justify-content-around">
        <a class="nav-link text-center" href="../feed/index.html">
          <i class="bi bi-house-fill"></i><br />Home
        </a>
        <a
          class="nav-link text-center"
          href="#searchCollapse"
          data-bs-toggle="collapse"
          role="button"
          aria-expanded="false"
          aria-controls="searchCollapse"
        >
          <i class="bi bi-search"></i><br />Search
        </a>
        <a
          class="nav-link text-center"
          href="#postCollapse"
          data-bs-toggle="collapse"
          href="#postCollapse"
          role="button"
          aria-expanded="false"
          aria-controls="postCollapse"
        >
          <i class="bi bi-plus-circle-fill"></i><br />New Post
        </a>

        <a class="nav-link text-center" href="../profile/index.html">
          <i class="bi bi-person-fill"></i><br />Profile
        </a>
      </div>
    </nav>
    `;
}

createNav();
