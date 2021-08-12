import { ServiceForm } from "./ServiceForm.js"
import { Requests } from "./ServiceRequests.js"

export const Buttons = () => {
    return `
        <h1>Buttons the Clown</h1>
        <section class="serviceForm">
            ${ServiceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Requests()}
        </section>
    `
}