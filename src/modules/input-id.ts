import { handleSubmit } from "./submit"

const input: HTMLInputElement = document.getElementById("input-id") as HTMLInputElement
const enterButton: HTMLButtonElement = document.getElementById("enter-button") as HTMLButtonElement

addEventListener("input", () => {
  /*
   * This function is handling the input to:
   * 1. make sure the input has only digits
   * 2. has the proper length
   * 3. Formats the input with the followin ID pattern: 123-567-901-345
   *    ID Pattern: (15 characters, 12 total digits split by blocks of 3 digits)
   * Note: The input formatting adds the dashes after each 3 digits 
   *       This also helps the user by automaticly inserting the dashes if the user doesn't input them
   */

  const { length } = input.value
  //Save caret position to restore it after the id pattern is applied
  let caretPosition = input.selectionStart 
  
  //Test if the user has tried to input another dash (the first one is ignored)
  const doubleDash = input.value.endsWith("--")

  /*
   * Don't do anything with the input if: 
   * - the lenght has gone back to 0, or
   * - the length is not yet full (15) AND
   *   - the user has input a dash at the end
   *   - it wasn't a repeated dash (second dash)
   */ 
  if(length === 0 || (length < 15 && input.value.endsWith("-") && !doubleDash))
    return;

  //Regular expression to remove any no digits
  const hasCharactersRegex = /\D+/g;
  //Store the digits in a temp value, since any dash will also be removed
  let tempValue = input.value.replace(hasCharactersRegex, "");

  /* 
   * Update the input with formated id:
   *   - Add dashes after each combination of 3 digits with regEx 
   *   - if the user input a double dash, a single dash has to be readded to the end
   */
  input.value = tempValue.match(/.{1,3}/g).join("-") + (doubleDash ? "-" : "")

  //Test if the lenght has increased, i.e. one or more dashes were added to update the caret position
  const newLength = input.value.length
  if(newLength > length)
    caretPosition++
  input.setSelectionRange(caretPosition, caretPosition)

  //Enable or disable the enter button according to the updated lenght 
  if(newLength === 15)
    enterButton.removeAttribute("disabled")
  else 
    enterButton.setAttribute("disabled", "disabled")
})

input.onkeydown = (keyEvent) => {
  
  if(keyEvent.key === "Enter" && input.value.length === 15) {
    handleSubmit({ id: input.value })
  }
}

enterButton.onclick = () => {
    handleSubmit({ id: input.value })
}
