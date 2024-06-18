import { IUserInfo } from "../interfaces/user-info";

export function LoadUserCard(user: IUserInfo)
{
  const cardId = document.querySelector(".card-id span")
  cardId.textContent = `ID: ${user.id}`

  const cardProgress = document.querySelector(".card-progress") as HTMLDivElement
  //Clear card
  cardProgress.innerHTML = ''

  //User cuts
  const { totalCuts, cutsNeeded, cutsRemaining } = user.loyaltyCard
  //Update ordinal text
  const ordinalSpan = document.querySelector(".card-title span")
  ordinalSpan.textContent = `Ao fazer cortes de cabelo, o ${ordinalText[cutsNeeded as keyof typeof ordinalText]} sai de graça!`
  //Fullfill the card

  const gridCols = cutsNeeded % 2 === 0 ? cutsNeeded * 0.5 : (cutsNeeded + 1) * 0.5
  const templateColumns = "1fr".padEnd(gridCols*4 - 1, " 1fr")
  cardProgress.style.gridTemplateColumns = templateColumns
  
  for(let i = 0; i < cutsNeeded; i++) {
    //  <div class="card-stamp"><img src="src/assets/PinCheck.png" alt=""></div>
    const cardStamp = document.createElement("div")
    cardStamp.classList.add("card-stamp")

    if (i < totalCuts) {
      const imgCheck = document.createElement("img")
      imgCheck.setAttribute("src", "src/assets/PinCheck.png")
      cardStamp.appendChild(imgCheck)
    } else if (i === cutsNeeded - 1) {
      // <div class="card-stamp gift-stamp"><img class="" src="src/assets/GiftPending.svg" alt=""></div>
      cardStamp.classList.add("gift-stamp")
      const imgGift = document.createElement("img")
      imgGift.setAttribute("src", "src/assets/GiftPending.svg")
      cardStamp.appendChild(imgGift)
    
    }
    cardProgress.appendChild(cardStamp)
  }

}

const ordinalText = {
  1: "primeiro",
  2: "segundo",
  3: "terceiro",
  4: "quarto",
  5: "quinto",
  6: "sexto",
  7: "sétimo",
  8: "oitavo",
  9: "nono",
  10: "décimo",
}
