import { agentDetails } from "./AgentDetails.js"
import { AgentHTML } from "./Agent.js"


const agentArray = agentDetails()
const contentTarget = document.querySelector(".agents")

export const AgentList = () => {
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    agentArray.forEach(
        (agentObject) => {
            contentTarget.innerHTML += AgentHTML(agentObject)
        }
    );
}