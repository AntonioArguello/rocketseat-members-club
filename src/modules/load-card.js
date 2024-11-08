const ids = document.querySelectorAll(".id-tag")
let slotsContainers = document.querySelectorAll(".slots")

export function loadLoyaltyCard(client) {
    ids.forEach(id => {
        id.textContent = `ID: ${client.id}`
    })
    
    loadSlots(client.loyaltyCard)
}

function loadSlots(loyaltyCard) {
    slotsContainers.forEach(slotsContainer => {
        let allSlots = slotsContainer.querySelectorAll(".slot")

        // Limpa os selos dos slots
        allSlots.forEach(slot => {
        slot.classList.remove('slot-true');
        })

        // Verifica se a quantidade de slots é menor que 10 e adiciona enquanto necessário
        if (allSlots.length < 10) {
            while (allSlots.length < 10) {
                // Cria novo slot e adiciona no container
                const newSlot = document.createElement('div')
                newSlot.classList.add("slot")
                slotsContainer.insertBefore(newSlot, slotsContainer.firstChild)

                // Atualiza a quantidade de slots
                allSlots = slotsContainer.querySelectorAll(".slot")  
            }
        }

        // Verifica quantidade de cortes necessários e remove slots a mais.
        if (loyaltyCard.cutsNeeded < 10) {
            for (let i = 0; i < 10 - loyaltyCard.cutsNeeded; i++) {
                slotsContainer.removeChild(slotsContainer.firstElementChild)
            }

            // Atualiza a quantidade de slots
            allSlots = slotsContainer.querySelectorAll(".slot")
        }

        // Adiciona o selo no slot
        for (let index = 0; index < loyaltyCard.totalCuts; index++) {
            if (index == 9) {

                // Modifica a imagem de gift
                allSlots[index].removeChild(allSlots[index].firstElementChild)
                const giftCheck = document.createElement("img")
                giftCheck.setAttribute("src", "/src/assets/icons/Gift-Check.svg")
                allSlots[index].appendChild(giftCheck)

                // Atualiza classe do gift
                allSlots[index].classList.remove("slot-gift")
                allSlots[index].classList.add("slot-gift-true")

                alert("Parabéns! Seu próximo corte é gratuito")
                break
            }

            allSlots[index].classList.add("slot-true")
        }
    })
    
}