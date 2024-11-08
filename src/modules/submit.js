import { searchId } from "./search-id.js"
import { loadCustomer } from "./load-customer.js";

const containers = document.querySelectorAll(".hidden")

document.querySelector("button").addEventListener("click", function() {
    try {
        let customer = searchId(document.getElementById("id-input").value)
        
        loadCustomer(customer)

        document.getElementById("id-input").value = ""

        containers.forEach(visibility => {
            visibility.classList.remove("hidden")
        })

    } catch (error) {
        console.log(error)
        alert(error)
    }
})