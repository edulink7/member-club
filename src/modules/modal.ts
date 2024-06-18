import { IModal } from "../interfaces/modal"

const modalContainer = document.querySelector(".modal-container") as HTMLDivElement
const giftButton = document.querySelector(".gift img") as HTMLImageElement
const imgInformation = document.querySelector(".information img") as HTMLImageElement
const messageContent = document.querySelector(".information span")
const titleContent = document.querySelector(".modal .content h2")
const closeButton = document.querySelector(".modal button") as HTMLButtonElement

addEventListener("click", (event) => {
  if(event.target === giftButton) {
    //Test if reached goal
    if(giftButton.hasAttribute("completed"))
      Congratulations()
  }
  if(event.target === modalContainer) {
    CloseModal()
  }
})

closeButton.onclick = () => CloseModal()

function CloseModal() {
  modalContainer.style.display = "none"

}

//Convenience function
export function Congratulations() {
  ShowModal({
    title: "PARABÉNS",
    message: "Seu próximo corte é gratuito!",
    type: "GIFT"
  })
}

export function ShowModal({title, message, type }: IModal) {
  modalContainer.style.display = "flex"
  titleContent.textContent = title
  messageContent.textContent = message

  if (type === "GIFT") {
    imgInformation.setAttribute("src", "src/assets/PinGift.png")
    imgInformation.style.border = "1.5px dashed var(--green)"
    imgInformation.style.borderRadius = "100%"
  } else {
    imgInformation.setAttribute("src", "src/assets/warning.svg")
    imgInformation.style.border = "none"
  }
}