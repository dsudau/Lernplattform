import React from 'react';

export function Header (props)  {
    return(
        <React.Fragment>
            <h1>Willkommen auf der Lernplattform</h1>
            <ul id="#headerTab">
                <li>
                    <input type = "button"
                        name = "registerButton"
                        className = "register"
                        onClick = {props.onClick}
                        value = "Registrieren"
                    />
                </li>
                <li>
                    <input type = "button"
                        name = "signInButton"
                        className = "signin"
                        onClick = {props.onClick}
                        value = "Anmelden"
                    />
                </li>
            </ul>
            <ul id="headerTab">
                <li id="headerTab">
                    <input type = "button"
                        name = "coursesButton"
                        className = {props.classnames[0]}
                        onClick = {props.onClick}
                        value = "Meine Kurse"
                        id="headerTab"
                    />
                </li>
                <li id="headerTab">
                    <input type = "button"
                        name = "catalogButton"
                        className = {props.classnames[1]}
                        onClick = {props.onClick}
                        value = "Katalog"
                        id="headerTab"
                    />
                </li>
                <li id="headerTab">
                    <input type = "button"
                        name = "forumButton"
                        className = {props.classnames[2]}
                        onClick = {props.onClick}
                        value = "Forum"
                        id="headerTab"
                    />
                </li>
                <li id="headerTab">
                    {props.searchcomponent}
                </li>
            </ul>
        </React.Fragment>
    );
}