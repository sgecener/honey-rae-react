import { useEffect, useState } from "react"
import { getNonStaffUsers } from "../../services/userService"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArr) => {
            setCustomers(customerArr)
        })
    }, [])
}