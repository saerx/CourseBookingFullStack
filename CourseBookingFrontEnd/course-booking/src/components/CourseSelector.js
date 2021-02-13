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
            newCourseQuery = `?starRating=${starRating}&customerName=${selectedCustomer}`
        } else if (selectedCustomer && !starRating){
            newCourseQuery = `?customerName=${selectedCustomer}`
        } else if (!selectedCustomer && starRating){
            newCourseQuery = `?starRating=${starRating}`
        }
        changeCourseQuery(newCourseQuery)
    }, [selectedCustomer, starRating])

    const customerOptions = customers.map((customer) => {

            return (
                <option value={customer.name}>{customer.name}</option>
            )
    })

    return (
        <div>
            <select 
                name="customer-selector"
                id="customer-selector"
                onChange={handleSelectedCustomerChange}
            >
                <option value="">Filter courses by customer</option>
                <option value="">All customers</option>
                {customerOptions}
            </select>
            <br/>
            <select
                name="starRating-selector"
                id="starRating-selector"
                onChange={handleStarChange}
            >
                <option value="">Filter courses by star rating</option>
                <option value="">All ratings</option>
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