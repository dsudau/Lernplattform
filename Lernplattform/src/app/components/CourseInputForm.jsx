import React, {useState} from 'react';
import { CategorySelect } from './formElements/CategorySelect';
import { sumExistingCategories } from './services/courseService';

export function CourseInputForm (props){
    const [courseID, setCourseID] = useState(0);
    const [newCourseCategory, setNewCourseCategory] = useState('');
    const [courseCategorySelection, setCourseCategorySelection] = useState('');
    const [courseName, setCourseName] = useState('');
    const [courseTasks, setCourseTasks] = useState([{id: 0, name: 'Beispielname', question: 'Frage', answers:[{id: 0, name: 'eine Antwort', correct: true}], type: 'oneChoice'}]);
    const [courseDescription, setCourseDescription] = useState('');
    const [showResults, setShowResults] = useState(true);
    function handleNameChange (event) {
        setCourseName(event.target.value);
    }
    function handleDescriptionChange (event) {
        setCourseDescription(event.target.value);
    }
    function handleSetCourseIDAndChangeViewToTaskInpunput (event) {
        setCourseID(props.content.length+1);
        setShowResults(false);
    }
    function handleNewCategoryChange (event) {
        setNewCourseCategory(event.target.value);
    }
    const callbackSelectedCategory = (selectedValue) => {
        setCourseCategorySelection(selectedValue);
    }
    function handleTaskName (event) {
        
    }
    console.log('ID:' + courseID + ' Kategorie: ' + courseCategorySelection + 'Neue Kategorie: ' + newCourseCategory + 'Kursname: ' + courseName + ' Beschreibung: ' + courseDescription);
    return (
        <React.Fragment>
            { showResults ?  
            <ul>
                <li>
                    <CategorySelect selectedCategory={callbackSelectedCategory} categories={sumExistingCategories(props.content)} />
                    <label>Kategorie nicht vorhanden? Erstelle eine neue:
                        <input type="text" value= { newCourseCategory } placeholder="Kursname" onChange = { handleNewCategoryChange } />
                    </label>
                </li>
                <li>
                    <input type="text" value= { courseName } placeholder="Kursname" onChange = { handleNameChange } />
                </li>
                <li>
                    <input type="text" value= { courseDescription } placeholder="Kursbeschreibung" onChange = { handleDescriptionChange } />
                </li>
                <li>
                    <input type="button" value="weiter" onClick={handleSetCourseIDAndChangeViewToTaskInpunput}/>
                </li>
            </ul>
            :
            <ul>
                <li>
                    <input type="text" value= { courseTasks.name } placeholder="Kursbeschreibung" onChange = { handleTaskName } />
                </li>
                <li>
                    <input type="button" value="nächste Aufgabe" onClick={handleSetCourseIDAndChangeViewToTaskInpunput}/>
                </li>
            </ul>
            }
        </React.Fragment>
    );
}