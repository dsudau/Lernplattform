import React, {useState} from 'react';

const createEmptyTask = () => ({
    id: 0,
    name: ''
});

const emptyCourse = {

};
export function CourseInputForm (props){
    const [courseName, setCourseName] = useState('');

    const handleChange = (event) => {
        setCourseName(event.target.value);
    }
    return (
        <React.Fragment>
            <ul>
                <li>
                    <input type="text" value= { courseName } placeholder="Kursname" onChange = { handleChange } />
                </li>
                <li>
                    <input type="button" value="weiter"/>
                </li>
            </ul>
            
        </React.Fragment>
    );
}