import { IUserIdentification } from "../interfaces/user-info";
import { fetchUserInfo } from "../services/fetch-user-info";
import { LoadUserProfile } from "./user-profile";

export async function handleSubmit({ id }: IUserIdentification) {
  try {
    const userInfo = await fetchUserInfo({ id })
    LoadUserProfile(userInfo)
    console.log(userInfo)
  } catch (error) {
    alert(error)
  }
}