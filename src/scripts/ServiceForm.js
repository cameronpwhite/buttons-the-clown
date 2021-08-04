import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceParent">Parent Name</label>
            <input type="text" name="serviceParent" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChild">Child's Name</label>
            <input type="text" name="serviceChild" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceGuests">Children attending</label>
            <input type="number" name="serviceGuests" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="date" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceLength">Length of reservation (in hours)</label>
            <input type="number" name="serviceLength" class="input" />
        </div>        

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}

export const mainContainer = document.querySelector("#container")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        //Store user input entries in a variable
        const userParent = document.querySelector("input[name=`serviceParent`]").value
        const userChild = document.querySelector("input[name=`serviceChild`]").value
        const userGuests = document.querySelector("input[name=`serviceGuests`]").value
        const userAddress = document.querySelector("input[name=`serviceAddress`]").value
        const userDate = document.querySelector("input[name=`serviceDate`]").value
        const userServiceLength = document.querySelector("input[name=`serviceLength`]").value
        
        //Declare a variable to store data to send to API.
        const dataToSendToAPI = {
            parent: userParent,
            child: userChild,
            numberOfGuests: userGuests,
            address: userAddress,
            date: userDate,
            reservationLength: userServiceLength
        }
        //Now send data to API 
        sendRequest(dataToSendToAPI)
    }
    
    }
)