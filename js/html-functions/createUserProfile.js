import { fetchUser } from "../api-calls/fetchUser.js";

export async function createUserProfile () {
    const container = document.querySelector("#profile-container");
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("profile");
    const profile = await fetchUser(id);
    console.log(profile);


    container.innerHTML = `
            <div class="col-md-4 offset-md-4">
          <div class="card text-center">
            <div class="card-body">
              <div class="ratio ratio-1x1">
                <img
                  src="${profile.data.avatar.url}"
                  class="rounded-circle img-fluid mb-3 p-5"
                  alt="${profile.data.avatar.alt}"
                />
              </div>
              <h4 class="card-title">${profile.data.name}</h4>
              <p class="card-text">
                ${profile.data.bio || "This user haven't written a bio yet"}
              </p>
              <div class="row text-center">
                    <button class="btn btn-primary mb-3">Follow</button>
                <div class="col-6">
                  <h5>${profile.data._count.followers}</h5>
                  <p>Followers</p>
                </div>
                <div class="col-6">
                  <h5>${profile.data._count.following}</h5>
                  <p>Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    `
}

createUserProfile();