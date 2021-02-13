import BookingsList from "../components/BookingsList"
import BookingSelector from "../components/BookingSelector"
import CustomersList from "../components/CustomersList"
import CustomerSelector from "../components/CustomerSelector"
import CoursesList from "../components/CoursesList"
import CourseSelector from "../components/CourseSelector"
import "./DataContainer.css"


const DataContainer = ({bookings, customers, courses, changeBookingQuery, changeCourseQuery, changeCustomerQuery}) => {


    return (
        <div>
            <div className="data-flex">
                <div className="customers">
                    <h2>Customers</h2>
                    <CustomerSelector changeCustomerQuery={changeCustomerQuery}/>
                    <CustomersList customers={customers}/>
                </div>
                <div className="courses">
                    <h2>Courses</h2>
                    <CourseSelector customers={customers} changeCourseQuery={changeCourseQuery}/>
                    <CoursesList courses={courses}/>
                </div>
                <div className="bookings">
                    <h2>Bookings</h2>
                    <BookingSelector changeBookingQuery={changeBookingQuery}/>
                    <BookingsList bookings={bookings}/>
                </div>
            </div>
        </div>
    )
}

export default DataContainer;