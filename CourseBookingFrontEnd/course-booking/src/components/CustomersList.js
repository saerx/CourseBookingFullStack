import CustomerItem from "./CustomerItem"

const CustomersList = ({customers}) => {

    const customerNodes = customers.map((customer) => {

        return (
            <CustomerItem 
                customer={customer}
                key={customer.id}
            />
        )
    })


    return (
        <>
            <h2>Customers</h2>
            <ul id="list">
                {customerNodes}
            </ul>
        </>
    )
}

export default CustomersList;