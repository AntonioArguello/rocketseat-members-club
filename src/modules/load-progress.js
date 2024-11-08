const cutsLeftElements = document.querySelectorAll(".cuts-left")
const progressFillElements = document.querySelectorAll(".progress-fill")
const progressBarContainers = document.querySelectorAll(".progress-bar-container")

export function loadProgressBar(loyaltyCard) {

    // Manipulação do span acima da barra
    cutsLeftElements.forEach(cutsLeft => {
        const topSpanElement = cutsLeft.querySelector("span")

        topSpanElement.innerHTML = loyaltyCard.cutsRemaining == 1 
                            ? `<strong>${loyaltyCard.cutsRemaining}</strong> corte restante` 
                            : `<strong>${loyaltyCard.cutsRemaining}</strong> cortes restantes.`
    })
     
    // Manipulação da barra
    const cutsRemainingPercentage = (loyaltyCard.cutsNeeded - loyaltyCard.cutsRemaining) * 100 / loyaltyCard.cutsNeeded
    progressFillElements.forEach(progressFill => {
        progressFill.style.width = `${cutsRemainingPercentage}%`
    })

    // Manipulação do span ao lado da barra
    progressBarContainers.forEach(progressBarContainer => {
        const sideSpanElement = progressBarContainer.querySelector("span")

        sideSpanElement.innerHTML = `${loyaltyCard.cutsRemaining} de ${loyaltyCard.cutsNeeded}`
    })       
}