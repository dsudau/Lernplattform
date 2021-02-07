import React, { useEffect, useState } from "react";
import { Course } from "./Course";
import { RegisterLoginForm } from "./RegisterLoginForm";

export function Content(props) {
  const [content, setContent] = useState(<React.Fragment></React.Fragment>);

  useEffect(() => {
    if (props.selectedtab == "catalogButton") {
      setContent(
        <Course courses={props.content} selectedtab={props.selectedtab} />
      );
    }
    if (props.selectedtab == "registerButton") {
      setContent(
        <RegisterLoginForm
          accounts={props.content}
          newAccountForServer={sendNewAccountToApp}
          isLoginView={true}
          onToggleLoginView={handleToggleLoginView}
          setViewAfterValidation={handleViewAfterValidation}
        />
      );
    }
    if (props.selectedtab == "signInButton") {
      setContent(
        <RegisterLoginForm
          accounts={props.content}
          newAccountForServer={sendNewAccountToApp}
          isLoginView={false}
          onToggleLoginView={handleToggleLoginView}
          setViewAfterValidation={handleViewAfterValidation}
          loggedInUserByRegisterLoginForm={handleSendLoggedInUserByContent}
        />
      );
    }
    if (props.selectedtab == "currentCourses") {
      setContent(
        <Course courses={props.content} selectedtab={props.selectedtab} />
      );
    }
  }, [props.selectedtab, props.content]);

  function handleSendLoggedInUserByContent(loggedInUser) {
    props.loggedInUserByChild(loggedInUser);
  }
  function handleToggleLoginView(isLoginView) {
    if (isLoginView) {
      props.handleSelectedTabByChild("registerButton");
    } else {
      props.handleSelectedTabByChild("signInButton");
    }
  }
  function handleViewAfterValidation(homePageView) {
    props.handleSelectedTabByChild(homePageView);
  }
  function sendNewAccountToApp(newAccountData) {
    props.sendNewAccountToServerByChild(newAccountData);
  }
  return <React.Fragment>{content}</React.Fragment>;
}
