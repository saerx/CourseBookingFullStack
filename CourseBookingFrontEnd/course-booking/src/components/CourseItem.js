const CourseItem = ({course}) => {

    return (
        <div id="item">
            <h3>{course.name}</h3>
            <p>Location: {course.town}</p>
            <p>Star Rating: {course.starRating}</p>
        </div>
    )
}

export default CourseItem;