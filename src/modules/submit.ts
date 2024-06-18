import { IUserIdentification } from "../interfaces/user-info";
import { fetchUserInfo } from "../services/fetch-user-info";
import { Congratulations, ShowModal } from "./modal";
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
    if (userInfo.loyaltyCard.cutsNeeded === userInfo.loyaltyCard.totalCuts) {
      setTimeout(() => {
        Congratulations()
      }, 1200)
    }
  } catch (error) {
    //TODO Modal
    ShowModal({ 
      title: "Atenção!", 
      message: "Erro ao buscar seu ID. Verifique o número digitado e tente novamente!", 
      type: "ERROR"
    })
  }
}