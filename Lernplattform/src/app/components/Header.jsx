import React from "react";

export function Header(props) {
  return props.registerloginbuttonsvisible ? (
    <React.Fragment>
      <ul className="registerLogin">
        <li className="registerLogin">
          <h1 id="registerLogin">Willkommen auf der Lernplattform</h1>
          <input
            type="button"
            name="signInButton"
            className="signin"
            onClick={props.onClick}
            value="Anmelden"
          />
          <input
            type="button"
            name="registerButton"
            className="register"
            onClick={props.onClick}
            value="Registrieren"
          />
        </li>
      </ul>
      <ul id="headerTab">
        <li id="headerTab">
          <input
            type="button"
            name="coursesButton"
            className={props.classnames[0]}
            onClick={props.onClick}
            value="Meine Kurse"
            id="headerTab"
          />
        </li>
        <li id="headerTab">
          <input
            type="button"
            name="catalogButton"
            className={props.classnames[1]}
            onClick={props.onClick}
            value="Katalog"
            id="headerTab"
          />
        </li>
        <li id="headerTab">
          <input
            type="button"
            name="forumButton"
            className={props.classnames[2]}
            onClick={props.onClick}
            value="Forum"
            id="headerTab"
          />
        </li>
        <li id="headerTab">{props.searchcomponent}</li>
      </ul>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <h1>Willkommen auf der Lernplattform, {props.loggedinuser}</h1>
      <input
        type="button"
        name="signOutButton"
        className="signOut"
        onClick={props.onClick}
        value="ausloggen"
      />
      <ul id="headerTab">
        <li id="headerTab">
          <input
            type="button"
            name="coursesButton"
            className={props.classnames[0]}
            onClick={props.onClick}
            value="Meine Kurse"
            id="headerTab"
          />
        </li>
        <li id="headerTab">
          <input
            type="button"
            name="catalogButton"
            className={props.classnames[1]}
            onClick={props.onClick}
            value="Katalog"
            id="headerTab"
          />
        </li>
        <li id="headerTab">
          <input
            type="button"
            name="forumButton"
            className={props.classnames[2]}
            onClick={props.onClick}
            value="Forum"
            id="headerTab"
          />
        </li>
        <li id="headerTab">{props.searchcomponent}</li>
      </ul>
    </React.Fragment>
  );
}
