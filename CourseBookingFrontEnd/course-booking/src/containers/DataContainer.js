import BookingsList from "../components/BookingsList"
import BookingSelector from "../components/BookingSelector"
import CustomersList from "../components/CustomersList"
import CoursesList from "../components/CoursesList"
import "./DataContainer.css"


const DataContainer = ({bookings, customers, courses}) => {


    return (
        <div>
            <div className="data-flex">
                <div className="customers">
                    <CustomersList customers={customers}/>
                </div>
                <div className="courses">
                    <CoursesList courses={courses}/>
                </div>
                <div className="bookings">
                    <h2>Bookings</h2>
                    <BookingSelector />
                    <BookingsList bookings={bookings}/>
                </div>
            </div>
        </div>
    )
}

export default DataContainer;