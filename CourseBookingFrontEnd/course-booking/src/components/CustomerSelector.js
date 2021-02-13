import {useEffect, useState} from "react";

const CustomerSelector = ({courses, changeCustomerQuery}) => {

    const [selectedCourse, setSelectedCourse] = useState("")


    const handleSelectedCustomerChange = (event) => {
        setSelectedCourse(event.target.value)
    }

    useEffect(()=>{
        let newCustomerQuery = ""
        if (selectedCourse){
            newCustomerQuery = `?courseName=${selectedCourse}`
        }
        changeCustomerQuery(newCustomerQuery)
    }, [selectedCourse])


    const courseOptions = courses.map((course) => {

        return (
            <option value={course.name}>{course.name}</option>
        )
})


    return (

        <div>
            <select 
                name="course-selector"
                id="course-selector"
                onChange={handleSelectedCustomerChange}
            >
                <option value="">Filter customers by course</option>
                <option value="">All customers</option>
                {courseOptions}
            </select>
        </div>


    )
}

export default CustomerSelector;