import React, {useEffect, useState} from 'react';

export function RegisterLoginForm (props) {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [firstPassword, setFirstPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const [validEmail, setValidEmail] = useState(false);
    const [validUserName, setValidUserName] = useState(false);
    const [validBothPasswords, setValidBothPasswords] = useState(false);
    const [isAlreadyExisting, setIsAlreadyExisting] = useState(false);
    const [isFinalValidation, setIsFinalValidation] = useState(false);

    const [registerClicked, setRegisterClicked] = useState(false);

    const [password, setPassword] = useState('');
    const [userOrEmail, setUserOrEmail] = useState('');

    const [validUserNameEmail, setValidUserNameEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [loginClicked, setLoginClicked] = useState(false);

    function toggleView(){
        if(props.isLoginView){
            props.onToggleLoginView(false);
        }else{
            props.onToggleLoginView(true);
        }  
    }

    function handleRegister(){
        setIsAlreadyExisting(false);
        setValidEmail(validateEmail(email));
        if(userName){
            setValidUserName(true);
        }
        if(firstPassword === secondPassword){
            setValidBothPasswords(true);
        }
        setRegisterClicked(true);
    }

    useEffect(() => {
        if(validEmail && validUserName && validBothPasswords){
            props.accounts.map((account) => {
                if(account.name == userName || account.email == email){
                    setIsAlreadyExisting(true);
                }
            });
        }
        if(registerClicked){
            setValidEmail(false);
            setValidUserName(false);
            setValidBothPasswords(false);
            setRegisterClicked(false);
        }
        if(!isAlreadyExisting){
            setIsFinalValidation(true);
        }
    },[registerClicked]);


    useEffect(() => {
        if(!isAlreadyExisting && isFinalValidation){
        const newID = props.accounts.length + 1;
        props.newAccountForServer({
            "id": newID,
            "name": userName,
            "email": email,
            "password": firstPassword,
            "role": "Teilnehmer"
        });
        }else{
            console.log('Gibts Schon');
        }
        setIsAlreadyExisting(false);
        setIsFinalValidation(false);
    },[isFinalValidation]);

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    function handleLogin(){
        setLoginClicked(true);
        if(!validUserNameEmail || !validPassword){
            setValidUserNameEmail(false);
            setValidPassword(false);
        }
    }
    useEffect(() => {
        setLoginClicked(false);
    },[loginClicked]);

    useEffect(() => {
        if(loginClicked){
            props.accounts.map((account) => {
                if(userOrEmail == account.name && !validUserNameEmail){
                    setValidUserNameEmail(true);
                }else if(userOrEmail == account.email && !validUserNameEmail){
                    setValidUserNameEmail(true);
                }
            });
        }
    },[loginClicked]);

    useEffect(() => {
        props.accounts.map((account) => {
            if(password == account.password && !validPassword && validUserNameEmail){
                setValidPassword(true);
            }
        }); 
    },[validUserNameEmail]);

    useEffect(() => {
        if(validUserNameEmail && validPassword){
            props.setViewAfterValidation("currentCourses");
        }
    },[validPassword]);

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
        {props.isLoginView ?
                <div className="registerLoginForm">
                    <h1 className="registerLoginForm">registrieren</h1>
                    <div className="registerLoginFormInner">
                        <input id="email" onChange={handleChange} value={email} className="registerLoginForm" type="email" placeholder="E-Mail-Adresse"/>
                        <input id="userName" onChange={handleChange} value={userName} className="registerLoginForm" type="text" placeholder="Benutzername"/>
                        <input id="firstPassword" onChange={handleChange} value={firstPassword} className="registerLoginForm" type="password" placeholder="Passwort"/>
                        <input id="secondPassword" onChange={handleChange} value={secondPassword} className="registerLoginForm" type="password" placeholder="Passwort bestätigen"/>
                        <input id="sendRegisterButton" className="sendButton" type="button" value="absenden" onClick={handleRegister}></input>
                        <br/>
                        <a className="registerLoginForm" onClick={toggleView}>bereits ein Konto? login</a>
                    </div>
                </div>
        :
                <div className="registerLoginForm">
                    <h1 className="registerLoginForm">anmelden</h1>
                    <div className="registerLoginFormInner">
                        <input id="userOrEmail" onChange={handleChange} value={userOrEmail} className="registerLoginForm" type="text" placeholder="Benutzername/E-Mail"/>
                        <input id="password" onChange={handleChange} value={password} className="registerLoginForm" type="password" placeholder="Passwort"/>
                        <input id="sendLoginButton" className="sendButton" type="button" value="absenden" onClick={handleLogin}/>
                        <br/>
                        <a className="registerLoginForm" onClick={toggleView}>noch kein Konto? registrieren</a>
                    </div>
                </div>
        }
    </React.Fragment>
    );
}