import './App.css';
import DataContainer from "./containers/DataContainer"
import {useState, useEffect } from "react"


function App() {

  const [bookings, setBookings] = useState([]);
  const [courses, setCourses] = useState([]);
  const [customers, setCustomers] = useState([]);


  return (
    <div className="App">
      <h1>App</h1>
      <DataContainer />
    </div>
  );
}

export default App;
