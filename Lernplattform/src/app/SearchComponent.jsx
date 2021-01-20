import React from 'react';

export class SearchComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  handleSearch(event){
    this.setState({value: event.target.value});
  }
  handleSearchClick(event){
    this.setState({value: ''});
  }
  render () {
    return (
      <input 
          type = "text"
          value = { this.state.value }
          onChange = { this.handleSearch }
          onClick = {this.handleSearchClick}
          placeholder = 'Suche'
      />
    );
  }
}