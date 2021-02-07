import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { getServerData, setServerData } from "./Services/dataServices";
import { ThemeContext } from "@emotion/react";
export function App(props) {
  const [roles, setRoles] = useState(null);
  const [accounts, setAccounts] = useState(null);

  const [categories, setCategories] = useState(null);
  const [courses, setCourses] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [answerTypes, setAnswerTypes] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [choiceAnswers, setChoiceAnswers] = useState(null);
  const [textAnswers, setTextAnswers] = useState(null);

  const [subscriptions, setSubscriptions] = useState(null);
  const [progresses, setProgresses] = useState(null);
  const [answersByStudent, setAnswersByStudent] = useState(null);
  const [corrections, setCorrections] = useState(null);
  const [gradings, setGradings] = useState(null);

  async function setInitialServerData() {
    await getServerData("roles").then((data) => {
      setRoles(data);
    });
    await getServerData("accounts").then((data) => {
      setAccounts(data);
    });
    await getServerData("categories").then((data) => {
      setCategories(data);
    });
    await getServerData("courses").then((data) => {
      setCourses(data);
    });
    await getServerData("tasks").then((data) => {
      setTasks(data);
    });
    await getServerData("answerTypes").then((data) => {
      setAnswerTypes(data);
    });
    await getServerData("answers").then((data) => {
      setAnswers(data);
    });
    await getServerData("choiceAnswers").then((data) => {
      setChoiceAnswers(data);
    });
    await getServerData("textAnswers").then((data) => {
      setTextAnswers(data);
    });
    await getServerData("subscriptions").then((data) => {
      setSubscriptions(data);
    });
    await getServerData("progresses").then((data) => {
      setProgresses(data);
    });
    await getServerData("answersByStudent").then((data) => {
      setAnswersByStudent(data);
    });
    await getServerData("corrections").then((data) => {
      setCorrections(data);
    });
    await getServerData("gradings").then((data) => {
      setGradings(data);
    });
  }
  useEffect(() => {
    setInitialServerData();
  }, []);
  return (
    <React.Fragment>
      <Header
        roles={roles}
        accounts={accounts}
        categories={categories}
        courses={courses}
        tasks={tasks}
        answerTypes={answerTypes}
        answers={answers}
        choiceAnswers={choiceAnswers}
        textAnswers={textAnswers}
        subscriptions={subscriptions}
        progresses={progresses}
        answersByStudent={answersByStudent}
        corrections={corrections}
        gradings={gradings}
      />
      <Footer />
    </React.Fragment>
  );
}
