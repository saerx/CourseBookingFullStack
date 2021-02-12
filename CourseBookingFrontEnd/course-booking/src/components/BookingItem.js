
const BookingItem = ({date, customer, course}) => {

    return (
        <div id="item">
            <h3>{date}</h3>
            <p>{customer}</p>
            <p>{course}</p>
        </div>
    )
}

export default BookingItem;