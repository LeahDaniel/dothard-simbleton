import { agentDetails } from "./AgentDetails.js"
import { AgentHTML } from "./Agent.js"

const agentArray = agentDetails()
const contentTarget = document.querySelector(".foundAgents")

export const keyPressAgent = () => {
    document
        .querySelector("#agentSearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const foundAgent = agentArray.find(agent => agent.fullName.includes(keyPressEvent.target.value))
                    if (foundAgent === undefined) {
                        contentTarget.innerHTML = "<p> No search results. Check your capitalization. </p>"
                    } else {
                        contentTarget.innerHTML = AgentHTML(foundAgent)
                    }
                }
            });
}