import React, { useState, useEffect } from "react";
import { CategorySelect } from "./formElements/CategorySelect";
import { sumExistingCategories } from "./services/courseService";

export function CourseInputForm(props) {
  const [courseID, setCourseID] = useState(0);
  const [newCourseCategory, setNewCourseCategory] = useState("");
  const [courseCategorySelection, setCourseCategorySelection] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseTasks, setCourseTasks] = useState([
    {
      id: 0,
      name: "Beispielname",
      question: "Frage",
      answers: [{ id: 0, name: "eine Antwort", correct: true }],
      type: "oneChoice",
    },
  ]);
  const [courseDescription, setCourseDescription] = useState("");
  const [showResults, setShowResults] = useState(true);
  const [taskName, setTaskName] = useState(null);
  const [sendToServer, setSendToServer] = useState(false);

  function handleNameChange(event) {
    setCourseName(event.target.value);
  }
  function handleDescriptionChange(event) {
    setCourseDescription(event.target.value);
  }
  function handleSetCourseIDAndChangeViewToTaskInpunput(event) {
    setCourseID(props.content.length + 1);
    setShowResults(false);
    if (newCourseCategory !== "") {
      setCourseCategorySelection(newCourseCategory);
    }
  }
  function handleNewCategoryChange(event) {
    setNewCourseCategory(event.target.value);
  }
  const callbackSelectedCategory = (selectedValue) => {
    setCourseCategorySelection(selectedValue);
  };
  function handleTaskName(event) {
    setTaskName(event.target.value);
  }
  function handleNextTask(event) {
    setSendToServer(true);
    setCourseTasks([
      {
        id: 0,
        name: taskName,
        question: "Frage",
        answers: [{ id: 0, name: "eine Antwort", correct: true }],
        type: "oneChoice",
      },
    ]);
  }
  useEffect(() => {
    if (sendToServer) {
      setSendToServer(false);
      props.newCoursData({
        id: courseID,
        category: courseCategorySelection,
        name: courseName,
        tasks: courseTasks,
        description: courseDescription,
      });
    }
  }, [sendToServer]);
  return (
    <React.Fragment>
      {showResults ? (
        <ul className="courseInputForm">
          <li className="courseInputForm">
            <CategorySelect
              selectedCategory={callbackSelectedCategory}
              categories={sumExistingCategories(props.content)}
            />
            <p className="courseInputForm">
              Kategorie nicht vorhanden? Erstelle eine neue:
            </p>
            <input
              className="courseInputForm"
              type="text"
              value={newCourseCategory}
              placeholder="neue Kategorie"
              onChange={handleNewCategoryChange}
            />
          </li>
          <li className="courseInputForm">
            <input
              className="courseInputForm"
              type="text"
              value={courseName}
              placeholder="Kursname"
              onChange={handleNameChange}
            />
          </li>
          <li className="courseInputForm">
            <input
              className="courseInputForm"
              type="text"
              value={courseDescription}
              placeholder="Kursbeschreibung"
              onChange={handleDescriptionChange}
            />
          </li>
          <li className="courseInputForm">
            <input
              className="courseInputForm"
              type="button"
              value="weiter"
              onClick={handleSetCourseIDAndChangeViewToTaskInpunput}
            />
          </li>
        </ul>
      ) : (
        <ul>
          <li className="courseInputForm">
            <input
              className="courseInputForm"
              type="text"
              value={courseTasks.name}
              placeholder="Name der Aufgabe"
              onChange={handleTaskName}
            />
          </li>
          <li className="courseInputForm">
            <input
              className="courseInputForm"
              type="button"
              value="nächste Aufgabe"
              onClick={handleNextTask}
            />
          </li>
        </ul>
      )}
    </React.Fragment>
  );
}
