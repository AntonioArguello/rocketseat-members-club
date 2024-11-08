import { loadData } from "./load-data"
import { loadHistoryList } from "./load-history"
import { loadLoyaltyCard } from "./load-card"
import { loadProgressBar } from "./load-progress"

export function loadCustomer(customer) {

    loadData(customer)

    loadHistoryList(customer)

    loadLoyaltyCard(customer)

    loadProgressBar(customer.loyaltyCard)
}