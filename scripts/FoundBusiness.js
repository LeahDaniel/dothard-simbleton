import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

const businessArray = getBusinesses()
const contentTarget = document.querySelector(".foundCompanies")

export const keyPress = () => {
    document
        .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    /*
                        When the user presses 'Enter', find the matching business.
    
                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.
    
                        Example: business.companyName.includes(keyPressEvent.target.value)
                    */

                    const foundBusiness = businessArray.find(business => business.companyName.includes(keyPressEvent.target.value))
                    if (foundBusiness === undefined) {
                        contentTarget.innerHTML = "<p> No search results. Check your capitalization. </p>"
                    } else {
                        contentTarget.innerHTML = Business(foundBusiness)
                    }
                }
            });
}
// const findBusiness = (searchstring) => {
//     const matchingBusiness = businessArray.find(business => business.companyName.startsWith(searchstring))
//     return matchingBusiness
// }

// export const foundBusiness = () => {
//     contentTarget.innerHTML = ""
//     const searchResults = findBusiness("Care")
//     if (searchResults === undefined) {
//         contentTarget.innerHTML += "<p> No search results </p>"
//     } else {
//         contentTarget.innerHTML += Business(searchResults)
//     }
// }



