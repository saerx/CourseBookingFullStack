import './App.css';
import DataContainer from "./containers/DataContainer"
import {useState, useEffect } from "react"


function App() {

  const [bookings, setBookings] = useState([]);
  const [courses, setCourses] = useState([]);
  const [customers, setCustomers] = useState([]);

  const fetchBookings = () => {
    console.log("getting bookings..")
    const allBookingsUrl = `http://localhost:8080/bookings`
    //const urls = [`http://localhost:8080/bookings`, `http://localhost:8080/courses`, `http://localhost:8080/customers`]
    fetch(allBookingsUrl)
      .then(res => res.json())
      .then(data => setBookings(data)) 
  }

  useEffect(() => {
    fetchBookings()
  }, [])


  return (
    <div className="App">
      <h1>App</h1>
      <DataContainer bookings={bookings}/>
    </div>
  );
}

export default App;
