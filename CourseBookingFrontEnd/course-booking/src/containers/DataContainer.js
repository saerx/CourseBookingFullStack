import BookingsList from "../components/BookingsList"
import CustomersList from "../components/CustomersList"
import CoursesList from "../components/CoursesList"


const DataContainer = () => {


    return (
        <div>
            <h1>Data Container</h1>
            <div className="data-flex">
                <div className="bookings">
                    <BookingsList/>
                </div>
                <div className="customers">
                    <CustomersList/>
                </div>
                <div className="courses">
                    <CoursesList/>
                </div>
            </div>
        </div>
    )
}

export default DataContainer;