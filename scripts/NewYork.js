import { getBusinesses } from "./database.js";

const BusinessList = getBusinesses()

const newYorkBusinesses = (business) => {
        if(business.addressStateCode === "NY") {
            return true
        } else {
            return false
        }
}

const listOfNewYorkBusinesses = () => {
    const filteredItems = BusinessList.filter( newYorkBusinesses )
    return filteredItems
}

const NYBusiness = ( businessObject ) => {
    return `
        <section class="business--NY">
            <h3 class="business--NY__name">${businessObject.companyName}</h3>
            <div class="business--NY__street">${businessObject.addressFullStreet}</div>
            <div class="business--NY__citystatezip">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
        </section>
        <hr>
    `
}

const contentTarget = document.querySelector("#businessList--newYork")

export const NYBusinessList = () => {
    const businessArray = listOfNewYorkBusinesses()
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += NYBusiness(businessObject)
        }
    );
}
