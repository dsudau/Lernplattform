import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { getServerData, setServerData } from "./services/dataServices";
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

  const [loggedInAccount, setLoggedInAccount] = useState(null);
  const [newServerData, setNewServerData] = useState(null);
  function setInitialServerData() {
    getServerData("roles").then((data) => {
      setRoles(data);
    });
    getServerData("accounts").then((data) => {
      setAccounts(data);
    });
    getServerData("categories").then((data) => {
      setCategories(data);
    });
    getServerData("courses").then((data) => {
      setCourses(data);
    });
    getServerData("tasks").then((data) => {
      setTasks(data);
    });
    getServerData("answerTypes").then((data) => {
      setAnswerTypes(data);
    });
    getServerData("answers").then((data) => {
      setAnswers(data);
    });
    getServerData("choiceAnswers").then((data) => {
      setChoiceAnswers(data);
    });
    getServerData("textAnswers").then((data) => {
      setTextAnswers(data);
    });
    getServerData("subscriptions").then((data) => {
      setSubscriptions(data);
    });
    getServerData("progresses").then((data) => {
      setProgresses(data);
    });
    getServerData("answersByStudent").then((data) => {
      setAnswersByStudent(data);
    });
    getServerData("corrections").then((data) => {
      setCorrections(data);
    });
    getServerData("gradings").then((data) => {
      setGradings(data);
    });
  }
  useEffect(() => {
    setInitialServerData();
  }, []);
  useEffect(() => {
    if (newServerData !== null) {
      let name = null;
      let data = null;
      newServerData.map((part) => {
        if (part.name) {
          name = part.name;
        }
        if (part.data) {
          data = part.data;
        }
      });
      setServerData(name, data);
    }
    setNewServerData(null);
  }, [newServerData]);
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
        loggedInAccount={loggedInAccount}
        setLoggedInAccount={(id) => setLoggedInAccount(id)}
        setNewServerData={(name, data) =>
          setNewServerData([{ name: name }, { data: data }])
        }
      />
    </React.Fragment>
  );
}
