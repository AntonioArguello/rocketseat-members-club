const db = require("../../db.json")

export function searchId(id) {
    let found = false

    for (let index in db.clients) {
        if (db.clients[index].id === id) {
            found = true
            return db.clients[index]
        }
    }
    if (!found) {
        throw new Error ("ID não encontrado!")
    }
}