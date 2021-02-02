import React, {useEffect, useState} from 'react';

export function Course (props){
    const [courseView, setCourseView] = useState(<React.Fragment></React.Fragment>);
    function CourseList () {
        return (<ul>{props.courses.map((course) => (
            <li key = { `course-${course.id}` } >
                <p>{course.category}</p>
                <input type="text" readOnly={true} value={course.name} />
                    {course.tasks.map((task) => {
                        return (<div key = {`task-${task.id}`}>
                            <p>{task.name}</p>
                            <p>{task.question}</p>
                            {task.answers.map((answer) => {
                                    return (<label key={`answer-${answer.id}`} htmlFor={`answer-${answer.id}`}> {answer.name} 
                                        <input type="checkbox" id={`answer-${answer.id}`} ></input>
                                    </label>);
                            })}</div>);
                    })}
                <p>{course.description}</p>
            </li>
        ))}</ul>);
    }

    function CurrentCourses () {
        return (<React.Fragment>
        <h1>Aktuelle Kurse</h1>
        <ul className="courseButtonContainer">
         {props.courses.map((course) => (
        <li className="courseButtonContainer" key = { `course-${course.id}` } >
            <a className="courseButtonContainer" onClick={event => handleSelechtedCourse(event, course.id)}>
            <div className="courseButtonContainer">
                <h1 className="courseButtonContainer">{course.name}</h1>
                <b className="courseButtonContainer">Lernziele: </b>
                <p className="courseButtonContainer" >{course.description}</p>
            </div>
            </a>
        </li>
        ))}
    </ul></React.Fragment>);
    }
    function handleSelechtedCourse(event, id){
        console.log(id);
    }

    useEffect(() => {
        if(props.selectedtab == 'currentCourses'){
            setCourseView(<CurrentCourses />);
        }
        if(props.selectedtab == 'catalogButton'){
            setCourseView(<CourseList />);
        }
    },[props.selectedtab, props.content]);

    return (
        <React.Fragment>
            {courseView}
        </React.Fragment>
    );
}