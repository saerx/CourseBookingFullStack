import BookingsList from "../components/BookingsList"
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
                    <BookingsList bookings={bookings}/>
                </div>
            </div>
        </div>
    )
}

export default DataContainer;