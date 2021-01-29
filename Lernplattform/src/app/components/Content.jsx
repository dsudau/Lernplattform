import React, {useState} from 'react';
import { Course } from './Course';

export function Content (props){
  const [content, setContent] = useState(<React.Fragment></React.Fragment>);
  const [selectedtab, setSelectedTab] = useState(props.selectedtab);

  if(selectedtab == "catalogButton"){
    setContent(<Course courses={props.content} />);
    setSelectedTab('');
  }
  
  return (
    <React.Fragment>
      {content}
    </React.Fragment>
  )
}