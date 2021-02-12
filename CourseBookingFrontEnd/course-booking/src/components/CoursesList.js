import CourseItem from "./CourseItem"

const CoursesList = ({courses})=>{

    const courseNodes = courses.map((course) => {

        return(
            <CourseItem 
                course={course}
                key={course.id}
            />
        )
    })

    return (
        <>
            <h2>Courses List</h2>
            <ul id="list">
                {courseNodes}
            </ul>
        </>
    )
}

export default CoursesList;