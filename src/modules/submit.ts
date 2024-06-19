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
    const { cutsNeeded, totalCuts }= userInfo.loyaltyCard
    //Verify if cutsNeeded is at max 10 to not break layouts
    if(cutsNeeded > 10) {
      ShowModal({ 
        title: "Atenção!", 
        message: "Seu cartão não está de acordo com as regras, por favor contate o responsável para corrigir. (Erro: selos exigidos superior a 10)", 
        type: "ERROR"
      })
      return
    }
    LoadUserProfile(userInfo)
    LoadUserCard(userInfo)
    LoadUserProgress(userInfo)
    LoadUserHistory(userInfo)
    //Delay show modal to allow animation of the progress bar to complete
    if (cutsNeeded === totalCuts) {
      setTimeout(() => {
        Congratulations()
      }, 1200)
    }
  } catch (error) {
    ShowModal({ 
      title: "Atenção!", 
      message: "Erro ao buscar seu ID. Verifique o número digitado e tente novamente!", 
      type: "ERROR"
    })
  }
}