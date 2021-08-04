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
            <label class="label" for="serviceGuests">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceGuests">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}