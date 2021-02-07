import React, { useState, useEffect, useImperativeHandle } from "react";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { SearchComponent } from "./components/SearchComponent";
import { CourseInputForm } from "./components/CourseInputForm";

export function App(props) {
  const [content, setContent] = useState([]);
  const [contentComponent, setContentComponent] = useState(
    <React.Fragment></React.Fragment>
  );
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("currentCourses");
  const [classNames, setClassNames] = useState(["", "", ""]);
  const [jsonServerLink, setJsonServerLink] = useState("courses");
  const [newCourse, setNewCourse] = useState(null);
  const [newAccount, setNewAccount] = useState(null);
  const [
    registerLoginButtonsVisible,
    setRegisterLoginButtonsVisible,
  ] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState("");

  function handleSelectedButton(event) {
    setSelectedTab(event.target.name);
    if (event.target.name == "coursesButton") {
      setClassNames(["clicked", "", ""]);
      setJsonServerLink("courses");
    } else if (event.target.name == "catalogButton") {
      setClassNames(["", "clicked", ""]);
      setJsonServerLink("courses");
    } else if (event.target.name == "forumButton") {
      setClassNames(["", "", "clicked"]);
      setJsonServerLink("courses");
    } else if (event.target.name == "signInButton") {
      setClassNames(["", "", ""]);
      setJsonServerLink("accounts");
    } else if (event.target.name == "registerButton") {
      setClassNames(["", "", ""]);
      setJsonServerLink("accounts");
    } else if (event.target.name == "logOutButton") {
      setClassNames(["", "", ""]);
      setJsonServerLink("accounts");
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3000/${jsonServerLink}`)
      .then((response) => response.json())
      .then((loadedContent) => {
        setIsLoading(false);
        setContent(loadedContent);
        if (selectedTab == "currentCourses") {
          setContentComponent(
            <Content content={loadedContent} selectedtab={selectedTab} />
          );
        } else if (selectedTab == "coursesButton") {
          setContentComponent(<React.Fragment></React.Fragment>);
        } else if (selectedTab == "catalogButton") {
          setContentComponent(
            <Content content={loadedContent} selectedtab={selectedTab} />
          );
        } else if (selectedTab == "forumButton") {
          setContentComponent(<React.Fragment></React.Fragment>);
        } else if (selectedTab == "signInButton") {
          setContentComponent(
            <Content
              content={loadedContent}
              sendNewAccountToServerByChild={handleSendNewAccountToServer}
              handleSelectedTabByChild={handleSelectedTab}
              selectedtab={selectedTab}
              loggedInUserByChild={handleSetLoggedInUser}
            />
          );
        } else if (selectedTab == "registerButton") {
          setContentComponent(
            <Content
              content={loadedContent}
              sendNewAccountToServerByChild={handleSendNewAccountToServer}
              handleSelectedTabByChild={handleSelectedTab}
              selectedtab={selectedTab}
            />
          );
        } else if (selectedTab == "logOutButton") {
          setContentComponent(
            <Content
              content={loadedContent}
              sendNewAccountToServerByChild={handleSendNewAccountToServer}
              handleSelectedTabByChild={handleSelectedTab}
              selectedtab={selectedTab}
              loggedInUserByChild={handleSetLoggedInUser}
            />
          );
        }
      });
  }, [newCourse, selectedTab, newAccount]);
  useEffect(() => {
    if (newCourse !== null) {
      fetch("http://localhost:3000/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCourse),
      });
      setNewCourse(null);
    }
  }, [newCourse]);

  useEffect(() => {
    if (newAccount !== null) {
      fetch("http://localhost:3000/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAccount),
      });
      setNewAccount(null);
    }
  }, [newAccount]);

  function handleSendNewAccountToServer(aNewAccount) {
    setNewAccount(aNewAccount);
    content.map((account) => {
      if (account.id == aNewAccount.id) {
        setNewAccount(null);
      }
    });
  }

  function handleGetNewCourse(aNewCourse) {
    setNewCourse(aNewCourse);
    content.map((course) => {
      if (course.id == aNewCourse.id) {
        setNewCourse(null);
      }
    });
  }

  function handleSelectedTab(newSelectedTab) {
    setSelectedTab(newSelectedTab);
    if (newSelectedTab == "currentCourses") {
      setJsonServerLink("courses");
    }
  }

  function handleSetLoggedInUser(user) {
    setLoggedInUser(user);
    setRegisterLoginButtonsVisible(false);
  }

  return (
    <React.Fragment>
      <Header
        classnames={classNames}
        searchcomponent={<SearchComponent />}
        onClick={handleSelectedButton}
        registerloginbuttonsvisible={registerLoginButtonsVisible}
        loggedinuser={loggedInUser}
      />
      {contentComponent}
      <CourseInputForm content={content} newCoursData={handleGetNewCourse} />
    </React.Fragment>
  );
}
