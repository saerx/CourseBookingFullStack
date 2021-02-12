const CustomerItem = ({customer}) => {

    return (
        <div id="item">
            <h3>{customer.name}</h3>
            <p>Location: {customer.town}</p>
            <p>Age: {customer.age}</p>
        </div>
    )
}

export default CustomerItem;