import {useEffect, useState} from "react"

const BookingSelector = () => {

    const [date, setDate] = useState("");

    return (

        <div >
            <label for="booking-date">Choose Booking Date: </label>
            <input type="date" id ="booking-date" name="booking-date"
                   value="" min="2020-06-01" max="2021-12-01"></input>
                    

        </div>
    )
}

export default BookingSelector;