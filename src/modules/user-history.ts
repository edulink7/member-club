import { IUserInfo } from "../interfaces/user-info";

export function LoadUserHistory(user: IUserInfo) {
  //Update title
  const { length } = user.appointmentHistory
  const historyTitleText = document.querySelector(".history-title span")
  historyTitleText.textContent = `${length} ${length === 1 ? 'corte' : 'cortes'}`

  //Update list
  const historyList = document.getElementById("history-list")
  //Clear list first
  historyList.innerHTML = ''

  user.appointmentHistory.map(appointment => {
    /* Sample item
      *  <li class="history-item">
      *   <div class="item-date">
      *     <h2 class="subtitle-sm">29/04/2024</h3>
      *     <span class="text-xs">18:30</span>
      *   </div>
      *   <div class="item-check">
      *     <img src="src/assets/HistoryCheck.svg" alt="">
      *   </div>
      * </li>
    */

    const historyItem = document.createElement("li")
    historyItem.classList.add("history-item")
    historyItem.innerHTML = 
    `
    <div class="item-date">
      <h2 class="subtitle-sm">${appointment.date}</h3>
      <span class="text-xs">${appointment.time}</span>
    </div>
    <div class="item-check">
      <img src="src/assets/HistoryCheck.svg" alt="">
    </div>
    `
    
    // const itemDate = document.createElement("div")
    // itemDate.classList.add("item-date")
    
    // const textDate = document.createElement("h2")
    // textDate.classList.add("subtitle-sm")
    // textDate.textContent = appointment.date

    // const textHour = document.createElement("span")
    // textHour.classList.add("text-xs")
    // textHour.textContent = appointment.time

    // //Add hour and time to item-date
    // itemDate.append(textDate, textHour)

    // const itemCheck = document.createElement("div")
    // itemCheck.classList.add("item-check")

    // const imgCheck = document.createElement("img")
    // imgCheck.setAttribute("src", "src/assets/HistoryCheck.svg")

    // itemCheck.appendChild(imgCheck)

    // //Add items to li then ul
    // historyItem.append(itemDate, itemCheck)
    historyList.appendChild(historyItem)

  
  })
}