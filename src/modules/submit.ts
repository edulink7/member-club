import { IUserIdentification } from "../interfaces/user-info";
import { fetchUserInfo } from "../services/fetch-user-info";
import { LoadUserCard } from "./user-card";
import { LoadUserHistory } from "./user-history";
import { LoadUserProfile } from "./user-profile";
import { LoadUserProgress } from "./user-progress";

export async function handleSubmit({ id }: IUserIdentification) {
  try {
    const userInfo = await fetchUserInfo({ id })
    LoadUserProfile(userInfo)
    LoadUserCard(userInfo)
    LoadUserProgress(userInfo)
    LoadUserHistory(userInfo)
  } catch (error) {
    //TODO Modal
    alert(error)
  }
}