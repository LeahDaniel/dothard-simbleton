export const AgentHTML = (agentObject) => {
    return `
        <section class="agent">
            <h3 class="agent__name">${agentObject.fullName}</h3>
            <div class="agent__company">${agentObject.companyName}</div>
            <div class="business__phoneNumber">${agentObject.phoneWork}</div>
        </section>
        <hr>
        `
}