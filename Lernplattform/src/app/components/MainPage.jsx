import React from 'react';
import { Header } from './Header';
import { Content } from './Content';

export class MainPage extends React.Component {
  render () {
    return (
      <div>
          <Header/>
          <Content/>
          <h1>footer</h1>
      </div>
    );
  }
}