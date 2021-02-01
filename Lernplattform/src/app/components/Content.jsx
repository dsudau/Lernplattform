import React, {useEffect, useState} from 'react';
import { Course } from './Course';
import { RegisterForm } from './RegisterForm';

export function Content (props){
  const [content, setContent] = useState(<React.Fragment></React.Fragment>);

  useEffect(() => {
    if(props.selectedtab == "catalogButton"){
      setContent(<Course courses={props.content} />);
    }
    if(props.selectedtab == "registerButton"){
      setContent(<RegisterForm editform={true} onToggleEditForm={handleToggleEditForm} />);
    }
    if(props.selectedtab == "signInButton"){
      setContent(<RegisterForm editform={false} onToggleEditForm={handleToggleEditForm} />);
    }
  },[props.selectedtab]);

  function handleToggleEditForm(editForm){
    if(editForm){
      props.handleSelectedTabByParent('registerButton');
    }else{
      props.handleSelectedTabByParent('signInButton');
    }
  }
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}