import { getBusinesses } from "./database.js";

const BusinessList = getBusinesses()

const manufacturingBusinesses = (business) => {
        if(business.companyIndustry === "Manufacturing") {
            return true
        } else {
            return false
        }
}

const listOfManufacturingBusinesses = () => {
    const filteredItems = BusinessList.filter( manufacturingBusinesses )
    return filteredItems
}

const ManfBusiness = ( businessObject ) => {
    return `
        <section class="business--manufacturing">
            <h3 class="business--manufacturing__name">${businessObject.companyName}</h3>
            <div class="business-manufacturing__street">${businessObject.addressFullStreet}</div>
            <div class="business-manufacturing__citystatezip">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
        </section>
        <hr>
    `
}

const contentTarget = document.querySelector("#businessList--manufacturing")

export const ManufacturingBusinessList = () => {
    const businessArray = listOfManufacturingBusinesses()
    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += ManfBusiness(businessObject)
        }
    );
}


