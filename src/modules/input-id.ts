const input: HTMLInputElement = document.getElementById("input-id") as HTMLInputElement
const enterButton: HTMLButtonElement = document.getElementById("enter-button") as HTMLButtonElement

addEventListener("input", (event) => {
  const { length } = input.value
  let caretPosition = input.selectionStart //event.target.selectionStart
  
  console.log(input.value, "position", caretPosition, "length", length)
  const doubleDash = input.value.endsWith("--")
  //123-567-901-345
  if(length === 0 || (length < 15 && input.value.endsWith("-") && !doubleDash))
    return;
  const hasCharactersRegex = /\D+/g;
  let tempValue = input.value.replace(hasCharactersRegex, "");
  console.log(tempValue)
  console.log(tempValue.match(/.{1,3}/g))
  //Add dashes
  input.value = tempValue.match(/.{1,3}/g).join("-") + (doubleDash ? "-" : "")
  const newLength = input.value.length
  if(newLength > length)
    caretPosition++
  input.setSelectionRange(caretPosition, caretPosition)

  if(newLength === 15)
    enterButton.removeAttribute("disabled")
  else 
    enterButton.setAttribute("disabled", "disabled")
})

input.onkeydown = (keyEvent) => {
  
  if(keyEvent.key === "Enter" && input.value.length === 15) {
    handleSubmit()
  }
}

enterButton.onclick = () => {
  handleSubmit()
}

function handleSubmit() {
  console.log("SUBMIT")
  //double check pattern?
}