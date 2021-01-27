import React, {useState, useEffect, useImperativeHandle} from 'react';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { SearchComponent } from './components/SearchComponent';

export function App (props) {
  const [ content, setContent ] = useState([]);
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
  }else if(event.target.name == "catalogButton"){
    setClassNames(['','clicked','']);
    setJsonServerLink('courses');
  }else if(event.target.name == "forumButton"){
    setClassNames(['','','clicked']);
    setJsonServerLink('courses');
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
                selectedtab = {selectedTab}
                searchcomponent = {<SearchComponent onClick={handleSearchClick} onChange={handleSearch} value={searchValue} />}
                onClick = {handleSelectedButton}
                />
                <h1>{selectedTab}</h1>
        <Content content={content}/>
    </React.Fragment>
  );
}