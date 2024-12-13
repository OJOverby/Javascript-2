import { fetchUser } from "../api-calls/fetchUser.js";
import { updateUser } from "../api-calls/updateUser.js";
import { save } from "./save.js";

export async function profileInputValues (profileName) {
    const profile = await fetchUser(profileName);
    console.log("PofileName:"+profileName)
    console.log(profile);

    document.getElementById('avatar').value = profile.data.avatar.url || '';
    document.getElementById('avatarAlt').value = profile.data.avatar.alt || '';
    document.getElementById('bio').value = profile.data.bio || '';
    const saveButton = document.getElementById("saveUpdatesButton");

    saveButton.onclick = async () => {
        const bio = document.getElementById('bio').value;
        const avatarUrl = document.getElementById('avatar').value;
        const avatarAlt = document.getElementById('avatarAlt').value;
    
        try {
          const updatedProfile = await updateUser(profileName, bio, avatarUrl, avatarAlt);
          console.log("Profile updated successfully:", updatedProfile);
          const profile = await fetchUser(profileName);
          save("profile", profile.data);
          window.location.reload()

        } catch (error) {
          console.error("Error updating profile:", error.message);
        }
      };
    }
