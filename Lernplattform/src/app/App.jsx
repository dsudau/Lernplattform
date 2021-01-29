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
  const [ searchValue, setSearchValue ] = useState('');

  function handleSearch(event){
    setSearchValue(event.target.value);
    console.log(searchValue);
  }

function handleSelectedButton(event) {
  setSelectedTab(event.target.name);
  if(event.target.name == "coursesButton"){
    setClassNames(['clicked','','']);
    setJsonServerLink('courses');
    setContentComponent(<React.Fragment></React.Fragment>);
  }else if(event.target.name == "catalogButton"){
    setClassNames(['','clicked','']);
    setJsonServerLink('accounts');
    setContentComponent(<Content content = {content} selectedtab = {event.target.name} />);
  }else if(event.target.name == "forumButton"){
    setClassNames(['','','clicked']);
    setJsonServerLink('courses');
    setContentComponent(<React.Fragment></React.Fragment>);
  }
}

function handleSearchClick(event){
  setSearchValue('');
}


useEffect(() => {
  fetch(`http://localhost:3000/${jsonServerLink}`).
    then(response => response.json()).
    then(loadedContent => {
      setIsLoading(false);
      setContent(loadedContent);
    });
}, []);


  return (
    <React.Fragment>
        <Header classnames = {classNames}
                searchcomponent = {<SearchComponent id="headerTab" onClick={handleSearchClick} onChange={handleSearch} value={searchValue} />}
                onClick = {handleSelectedButton}
                />
                <h1>{selectedTab}</h1>
                {contentComponent}
        <CourseInputForm />
    </React.Fragment>
  );
}