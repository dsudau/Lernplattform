'use strict';

import { Message } from './Message.js';

class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Message, {
      headline: "1. Headline!",
      text: "1. Paragraph!"
    }), /*#__PURE__*/React.createElement(Message, {
      headline: "2. Headline",
      text: "2. Paragraph!"
    }));
  }

}

const domTarget = document.querySelector('#my-react-app');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), domTarget);