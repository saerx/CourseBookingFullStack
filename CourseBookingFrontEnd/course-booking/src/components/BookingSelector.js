import {useEffect, useState} from "react"

const BookingSelector = ({changeBookingQuery}) => {

    const [date, setDate] = useState("");

    const handleDateChange = (event) => {
        setDate(event.target.value)
    }

    const viewAllDates = () => {
        setDate("")
    }

    useEffect(() => {
        let newBookingQuery = ""
        if (date) {
             newBookingQuery = `?date=${date}`
        }
        changeBookingQuery(newBookingQuery)
    }, [date])

    return (

        <div >
            <label for="booking-date">Choose Booking Date: </label>
            <br/>
            <input type="date" id ="booking-date" name="booking-date"
                   value={date} min="2020-06-01" max="2021-12-01"
                   onChange={handleDateChange}></input>
                   <br/>
            <button onClick={viewAllDates}>View All Dates</button>
                    

        </div>
    )
}

export default BookingSelector;