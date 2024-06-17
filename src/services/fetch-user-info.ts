import { IUserIdentification, IUserInfo } from "../interfaces/user-info";
import { apiConfig } from "./api-config"

export async function fetchUserInfo({ id }: IUserIdentification) {
  try {
    console.log("Fetching schedule for ", id)
    const response = await fetch(`${apiConfig.baseURL}/clients/${id}`)
    console.log("response", response)
    if(response.status === 404) {
      throw new Error("ID não encontrado, verifique o número digitado e tente novamente.")
    }

    const data = await response.json() as IUserInfo
    console.log("data", data)

    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}