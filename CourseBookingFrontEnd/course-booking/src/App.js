import './App.css';
import DataContainer from "./containers/DataContainer"
import {useState, useEffect } from "react"


function App() {

  const [bookings, setBookings] = useState([]);
  const [courses, setCourses] = useState([]);
  const [customers, setCustomers] = useState([]);

  const [bookingQuery, setBookingQuery] = useState("");

  // const fetchAll = () => {
    // const urls = [`http://localhost:8080/bookings`, `http://localhost:8080/courses`, `http://localhost:8080/customers`]
    // const promises = urls.map(url => {
    //   return fetch(url).then(res => res.json())
    // })

    // Promise.all(promises).then(data => {
    //   console.log("end of promise all", data)
    //   setBookings(data[0]);
    //   setCourses(data[1]);
    //   setCustomers(data[2]);
    // })
  // }

  const fetchBookings = () => {
    console.log("getting bookings..")
    const allBookingsUrl = `http://localhost:8080/bookings/${bookingQuery}`
    
    fetch(allBookingsUrl)
      .then(res => res.json())
      .then(data => setBookings(data)) 
  }

  const fetchCourses = () => {
    console.log("getting courses..")
    const allCoursesUrl = `http://localhost:8080/courses`
    
    fetch(allCoursesUrl)
      .then(res => res.json())
      .then(data => setCourses(data)) 
  }

  const fetchCustomers = () => {
    console.log("getting customers..")
    const allCustomersUrl = `http://localhost:8080/customers`
    
    fetch(allCustomersUrl)
      .then(res => res.json())
      .then(data => setCustomers(data)) 
  }

  const changeBookingQuery = (newQuery) => {
      setBookingQuery(newQuery);
  }

  useEffect(() => {
    fetchBookings()
  }, [bookingQuery])

  useEffect(() => {
    fetchCourses()
  }, [])

  useEffect(() => {
    fetchCustomers()
  }, [])


  return (
    <div className="App">
      <h1>Course Bookings</h1>
      <DataContainer 
          bookings={bookings}
          customers={customers}
          courses={courses}
          changeBookingQuery={changeBookingQuery}
        />
    </div>
  );
}

export default App;
