import React from 'react';
import { Header } from './Header';

export class MainPage extends React.Component {
  render () {
    return (
      <div>
          <Header/>
          <h1>Content</h1>
          <h1>footer</h1>
      </div>
    );
  }
}