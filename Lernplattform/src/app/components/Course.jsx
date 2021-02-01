import React from 'react';

export function Course (props){
    console.log(props.courses);
    function CourseList () {
        return (props.courses.map((course) => (
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
        )));
    }

    function CurrentCourses () {
        return (<React.Fragment>
        <h1>Aktuelle Kurse</h1>
        <ul className="courseButtonContainer">
         {props.courses.map((course) => (
        <li className="courseButtonContainer" key = { `course-${course.id}` } >
            <a className="courseButtonContainer">
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

    return (
        <React.Fragment>
            <ul>
                <CourseList />
            </ul>
            <CurrentCourses />
        </React.Fragment>
    );
}