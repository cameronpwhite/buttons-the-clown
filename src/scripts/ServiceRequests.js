import {deleteRequest, getRequests} from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("request--")) {
            const [,requestId] = event.target.id.split("--")
            deleteRequest(requestId)
        }
    }
)

export const Requests = () => {
    const serviceRequests = getRequests();

    let html = `<ul>
            ${serviceRequests.map(convertRequestToList)}
    </ul>`

    return html
}

const convertRequestToList = (request) => {
    return `<li class="requestListItem">
            Address: ${request.address}<br>
            Parent: ${request.parent}<br>
            Child: ${request.child}<br>
            Attendants: ${request.numberOfGuests}<br>
            Date: ${request.date}<br>
            Time: ${request.reservationLength} hours<br>
            <button class="request__delete" id="request--${request.id}">Deny</button>
    </li>`
}