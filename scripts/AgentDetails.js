import { getBusinesses } from "./database.js";

const businessList = getBusinesses()

export const agentDetails = () => {
    const mappedBusinessList = businessList.map(business => {
        const newObject = {
            fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
            companyName: business.companyName,
            phoneWork: business.phoneWork
        }
        return newObject
    })
    return mappedBusinessList
}