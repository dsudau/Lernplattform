import React, {useState} from 'react';

export function RegisterForm (props) {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [password, setPassword] = useState('');
    const [userOrEmail, setUserOrEmail] = useState('');

    function toggleForm(){
        if(props.editform){
            props.onToggleEditForm(false);
        }else{
            props.onToggleEditForm(true);
        }  
    }

    function handleRegister(){

    }
    function handleLogin(){
        
    }
    function handleChange(event){
        if(event.target.id == "email"){
            setEmail(event.target.value);
        }else if(event.target.id == "userName"){
            setUserName(event.target.value)
        }else if(event.target.id == "firstPassword"){
            setFirstPassword(event.target.value)
        }else if(event.target.id == "secondPassword"){
            setSecondPassword(event.target.value)
        }else if(event.target.id == "userOrEmail"){
            setUserOrEmail(event.target.value)
        }else if(event.target.id == "password"){
            setPassword(event.target.value)
        }
    }

    return (
        <React.Fragment>
        {props.editform ?
                <div className="registerForm">
                    <h1 className="registerForm">registrieren</h1>
                    <div className="registerFormInner">
                        <input id="email" onChange={handleChange} value={email} className="registerForm" type="email" placeholder="E-Mail-Adresse"/>
                        <input id="userName" onChange={handleChange} value={userName} className="registerForm" type="text" placeholder="Benutzername"/>
                        <input id="firstPassword" onChange={handleChange} value={firstPassword} className="registerForm" type="password" placeholder="Passwort"/>
                        <input id="secondPassword" onChange={handleChange} value={secondPassword} className="registerForm" type="password" placeholder="Passwort bestätigen"/>
                        <input id="sendRegisterButton" className="sendButton" type="button" value="absenden" onClick={handleRegister}></input>
                        <br/>
                        <a className="registerForm" onClick={toggleForm}>bereits ein Konto? login</a>
                    </div>
                </div>
        :
                <div className="registerForm">
                    <h1 className="registerForm">anmelden</h1>
                    <div className="registerFormInner">
                        <input id="userOrEmail" onChange={handleChange} value={userOrEmail} className="registerForm" type="text" placeholder="Benutzername/E-Mail"/>
                        <input id="password" onChange={handleChange} value={password} className="registerForm" type="password" placeholder="Passwort"/>
                        <input id="sendLoginButton" className="sendButton" type="button" value="absenden" onClick={handleLogin}/>
                        <br/>
                        <a className="registerForm" onClick={toggleForm}>noch kein Konto? registrieren</a>
                    </div>
                </div>
        }
    </React.Fragment>
    );
}