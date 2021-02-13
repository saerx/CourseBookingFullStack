import BookingItem from "./BookingItem"


const BookingsList = ({bookings}) => {

    // if (!bookings) return null;

    const bookingNodes = bookings.map((booking, index) => {

        return (
            <BookingItem 
                date={booking.date}
                customer={booking.customer.name}
                course={booking.course.name}
                key={booking.id}
            />
        )
    })


    return (

        <div>
            <ul id="list">
                {bookingNodes}
            </ul>
        </div>
    )
}

export default BookingsList;