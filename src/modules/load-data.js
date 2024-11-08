const profilePictures = document.querySelectorAll(".profile-picture")
const names = document.querySelectorAll(".name")
const clientsSince = document.querySelectorAll(".client-since")

export function loadData(client) {
    setAvatar(client.name)

    names.forEach (name => {
        name.textContent = client.name
    })
    
    clientsSince.forEach (clientSince => {
        clientSince.textContent = `Cliente desde ${client.clientSince}`
    })
}

function setAvatar(name) {
    profilePictures.forEach (profilePicture => {
        profilePicture.setAttribute("src", `src/assets/avatar/${formatName(name)}.jpg`)
    })
}

// Formata o nome para busca do avatar
function formatName(name) {
    // Normalizar a string
    const normalized = name.normalize('NFD');
    // Remover acentos e etc usando o regex
    const noAccents = normalized.replace(/[\u0300-\u036f]/g, '');
    // Converte para lowercase e troca espaços por hífens
    return noAccents.toLowerCase().replace(/\s+/g, '-');
}