import { IUserInfo } from "../interfaces/user-info";

export function LoadUserProfile(user: IUserInfo) {
  const userName = document.getElementById("user-name")
  userName.textContent = user.name

  const clientSince = document.getElementById("client-since")
  clientSince.textContent = `Cliente desde ${user.clientSince}`

  const picture = document.querySelector(".avatar-wrapper img")
  picture.setAttribute("src", `src/assets/profile-picture/${user.id}.jpg`)

}