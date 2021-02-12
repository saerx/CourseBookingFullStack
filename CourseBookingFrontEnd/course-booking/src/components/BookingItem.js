
const BookingItem = ({date, customer, course}) => {

    return (
        <>
            <h3>{date}</h3>
            <p>{customer}</p>
            <p>{course}</p>
        </>
    )
}

export default BookingItem;