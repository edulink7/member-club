import { IUserInfo } from "../interfaces/user-info";

export function LoadUserProgress(user: IUserInfo) {
  const { totalCuts, cutsNeeded, cutsRemaining } = user.loyaltyCard

  const progressRemaining = document.querySelector(".progress-container h2")
  progressRemaining.innerHTML = `${cutsRemaining} <span>${cutsRemaining === 1 ? 'corte restante' : 'cortes restantes'}</span>`

  const progressCurrent = document.querySelector(".progress-current") as HTMLDivElement
  const progressPercentage = totalCuts * 100 / cutsNeeded
  progressCurrent.style.width = `${progressPercentage}%`

  const progressText = document.querySelector(".progress-bar span")
  progressText.textContent = `${totalCuts} de ${cutsNeeded}`
}