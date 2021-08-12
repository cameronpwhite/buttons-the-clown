import { mainContainer } from "./ServiceForm.js"

const applicationState = {
    requests: []
}

const API = "http://localhost:8088"

export const fetchRequests = () => {
    return fetch(`${API}/requests`)
    .then(res => res.json())
    .then(
        (serviceRequests) => {
            applicationState.serviceRequests = serviceRequests
        }
    )
}

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
}

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/requests`, fetchOptions) 
        .then(res => res.json())
        .then(() =>
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        )
    }
