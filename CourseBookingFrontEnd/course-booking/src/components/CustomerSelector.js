import {useEffect, useState} from "react";

const CustomerSelector = ({courses, changeCustomerQuery}) => {


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
                // onChange={handleSelectedCustomerChange}
            >
                <option value="">Filter customers by course</option>
                {courseOptions}
            </select>
        </div>


    )
}

export default CustomerSelector;