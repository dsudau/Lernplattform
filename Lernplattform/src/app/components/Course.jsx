import React from 'react';

export function Course (props){
    function CourseList () {
        return (props.courses.map((course) => (
            <li key = { `course-${course.id}` } >
                <p>{course.category}</p>
                <input type="text" readOnly={true} value={course.name} />
                    {course.tasks.map(function (task){
                        return (<div key = {`task-${task.id}`}>
                            <p>{task.name}</p>
                            <p>{task.question}</p>
                            {task.answers.map(function(answer){
                                    return (<label key={`answer-${answer.id}`} htmlFor={`answer-${answer.id}`}> {answer.name} 
                                        <input type="checkbox" id={`answer-${answer.id}`} ></input>
                                    </label>);
                            })}</div>);
                    })}
                <p>{course.description}</p>
            </li>
        )));
    }

    return (
        <React.Fragment>
            <ul>
                <CourseList />
            </ul>
        </React.Fragment>
    );
}