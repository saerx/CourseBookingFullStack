import {useEffect, useState} from "react"


const CourseSelector = ({customers, changeCourseQuery}) => {

    const [selectedCustomer, setSelectedCustomer] = useState("")
    const [starRating, setStarRating] = useState("")

    const handleSelectedCustomerChange = (event) => {
        setSelectedCustomer(event.target.value)
    }

    const handleStarChange = (event) => {
        setStarRating(event.target.value)
    }

    useEffect(()=>{
        let newCourseQuery = ""
        if (selectedCustomer && starRating) {
            newCourseQuery = ""
        } else if (selectedCustomer && !starRating){
            newCourseQuery = `?customerName=${selectedCustomer}`
        } else if (!selectedCustomer && starRating){
            newCourseQuery = `?starRating=${starRating}`
        }
        changeCourseQuery(newCourseQuery)
    })

    const customerOptions = customers.map((customer) => {

            return (
                <option value={customer.name}>{customer.name}</option>
            )
    })

    return (
        <div>
            <h4>Please choose either a customer or a star rating to sort courses</h4>
            <select 
                name="customer-selector"
                id="customer-selector"
                onChange={handleSelectedCustomerChange}
            >
                <option value="">Select courses by customer attending</option>
                {customerOptions}
            </select>
            <br/>
            <select
                name="starRating-selector"
                id="starRating-selector"
                onChange={handleStarChange}
            >
                <option value="">Select courses by star rating</option>
                <option value="1">🌟</option>
                <option value="2">🌟🌟</option>
                <option value="3">🌟🌟🌟</option>
                <option value="4">🌟🌟🌟🌟</option>
                <option value="5">🌟🌟🌟🌟🌟</option>
            </select>
        </div>
    )

}

export default CourseSelector;