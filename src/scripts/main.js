import { Buttons } from "./Buttons.js"
import { fetchRequests } from "./dataAccess.js"
import { mainContainer } from "./ServiceForm.js"

export const render = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = Buttons()
        }
    )
}

render()

mainContainer.addEventListener("stateChanged",
    (event) => {
        render()
        console.log("State changed.")
    }
)