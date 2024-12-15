import { load } from "../../functions/load.js";
import { postInputValues } from "../../functions/postInputValues.js";
import { profileInputValues } from "../../functions/profileInputValues.js";

export function createProfile () {
    const container = document.querySelector("#profile-container");
    const profile = load("profile");
    console.log(profile);
    const profileName = profile.name;

    container.innerHTML = `
            <div class="col-md-4 offset-md-4">
          <div class="card text-center">
            <div class="card-body">
              <div class="ratio ratio-1x1">
                <img
                  src="${profile.avatar.url}"
                  class="rounded-circle img-fluid mb-3 p-5"
                  alt="${profile.avatar.alt}"
                />
              </div>
              <h4 class="card-title">${profile.name}</h4>
              <p class="card-text">
                ${profile.bio || "You haven't written a bio yet"}
              </p>
              <div class="row text-center">
                <div class="col-6">
                  <h5>${profile._followers?.length || "0"}</h5>
                  <p>Followers</p>
                </div>
                <div class="col-6">
                  <h5>${profile._following?.length || "0"}</h5>
                  <p>Following</p>
                </div>
                <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#profileModal">Edit Profile</button>
              </div>
            </div>
          </div>
        </div>
    `
  profileInputValues(profileName);
}

createProfile();