import React, { useEffect, useState } from "react";
import { sumExistingCategories } from "./services/courseService";
import { CategorySelect } from "./formElements/CategorySelect";
import { Anwer } from "./Answer";

export function Course(props) {
  const [courseView, setCourseView] = useState(
    <React.Fragment></React.Fragment>
  );
  const [courseCategorySelection, setCourseCategorySelection] = useState(
    "Mathematik"
  );
  const [selectCoursID, setSelectdCourseID] = useState(0);
  function CourseList() {
    return (
      <ul>
        {props.courses.map((course) => (
          <li key={`course-${course.id}`}>
            <p>{course.category}</p>
            <input type="text" readOnly={true} value={course.name} />
            {course.tasks.map((task) => {
              return (
                <div key={`task-${task.id}`}>
                  <p>{task.name}</p>
                  <p>{task.question}</p>
                  {task.answers.map((answer) => {
                    return (
                      <label
                        key={`answer-${answer.id}`}
                        htmlFor={`answer-${answer.id}`}
                      >
                        {" "}
                        {answer.name}
                        <input
                          type="checkbox"
                          id={`answer-${answer.id}`}
                        ></input>
                      </label>
                    );
                  })}
                </div>
              );
            })}
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    );
  }

  function CurrentCourses() {
    return (
      <React.Fragment>
        <div id="courseButtonContainer">
          <h1 className="courseButtonContainer">Aktuelle Kurse</h1>
          <CategorySelect
            selectedCategory={callbackSelectedCategory}
            categories={sumExistingCategories(props.courses)}
          />
        </div>
        <ul className="courseButtonContainer">
          {props.courses.map((course) => {
            if (courseCategorySelection == course.category)
              return (
                <li
                  className="courseButtonContainer"
                  key={`course-${course.id}`}
                >
                  <a
                    className="courseButtonContainer"
                    onClick={(event) => handleSelectedCourse(event, course.id)}
                  >
                    <div className="courseButtonContainer">
                      <h1 className="courseButtonContainer">{course.name}</h1>
                      <b className="courseButtonContainer">Lernziele: </b>
                      <p className="courseButtonContainer">
                        {course.description}
                      </p>
                    </div>
                  </a>
                </li>
              );
          })}
        </ul>
      </React.Fragment>
    );
  }

  const callbackSelectedCategory = (selectedValue) => {
    setCourseCategorySelection(selectedValue);
  };

  function handleSelectedCourse(event, id) {
    setSelectdCourseID(id);
  }
  function SelectedCourse() {
    return <Answer selectedcourseid={selectedCourseID} />;
  }

  useEffect(() => {
    if (props.selectedtab == "currentCourses") {
      setCourseView(<CurrentCourses />);
    }
    if (props.selectedtab == "catalogButton") {
      setCourseView(<CourseList />);
    }
  }, [props.selectedtab, props.content, courseCategorySelection]);

  return <React.Fragment>{courseView}</React.Fragment>;
}
