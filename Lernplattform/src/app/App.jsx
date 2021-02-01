import React, {useState, useEffect, useImperativeHandle} from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { SearchComponent } from './components/SearchComponent';
import { CourseInputForm } from './components/CourseInputForm';


export function App (props) {
  const [ content, setContent ] = useState([]);
  const [ contentComponent, setContentComponent] = useState(<React.Fragment></React.Fragment>);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ selectedTab, setSelectedTab ] = useState('');
  const [ classNames, setClassNames ] = useState(['','','']);
  const [ jsonServerLink, setJsonServerLink ] = useState('courses');
  const [ newCourse, setNewCourse ] = useState(null);

function handleSelectedButton (event) {
  setSelectedTab(event.target.name);
  if(event.target.name == "coursesButton"){
    setClassNames(['clicked','','']);
    setJsonServerLink('courses');
    setContentComponent(<React.Fragment></React.Fragment>);
  }else if(event.target.name == "catalogButton"){
    setClassNames(['','clicked','']);
    setJsonServerLink('courses');
    setContentComponent(<Content content={content} selectedtab={event.target.name} />);
  }else if(event.target.name == "forumButton"){
    setClassNames(['','','clicked']);
    setJsonServerLink('courses');
    setContentComponent(<React.Fragment></React.Fragment>);
  }else if(event.target.name == "signInButton"){
    setJsonServerLink('accounts');
    setContentComponent(<Content content={content} handleSelectedTabByParent={handleSelectedTab} selectedtab={event.target.name} />)
  }else if(event.target.name == "registerButton"){
    setJsonServerLink('accounts');
    setContentComponent(<Content content={content} handleSelectedTabByParent={handleSelectedTab} selectedtab={event.target.name} />)
  }
}

useEffect(() => {
  fetch(`http://localhost:3000/${jsonServerLink}`).
    then(response => response.json()).
    then(loadedContent => {
      setIsLoading(false);
      setContent(loadedContent);
    });
  },[newCourse, selectedTab]);

  useEffect(() => {
    if(newCourse !== null)
    {
        fetch("http://localhost:3000/courses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newCourse)
      })
      setNewCourse(null);
    }}, [newCourse]);

function handleGetNewCourse (aNewCourse) {
  setNewCourse(aNewCourse);
  content.map((course) => {
    if(course.id === aNewCourse.id){
      setNewCourse(null);
    };
  });
}
function handleSelectedTab (newSelectedTab){
  setSelectedTab(newSelectedTab);
  setContentComponent(<Content content = {content} handleSelectedTabByParent={handleSelectedTab} selectedtab={newSelectedTab} />);
}
  return (
    <React.Fragment>
        <Header classnames = {classNames}
                searchcomponent = {<SearchComponent/>}
                onClick = {handleSelectedButton}
                />
                <h1>{selectedTab}</h1>
                {contentComponent}
        <CourseInputForm content={content} newCoursData={handleGetNewCourse}/>
    </React.Fragment>
  );
}