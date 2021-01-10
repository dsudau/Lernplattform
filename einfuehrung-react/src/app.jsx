'use strict';

import { Message } from './Message.js';

class App extends React.Component {
    render() {
        return(
            <div>
                <Message headline="1. Headline!" text="1. Paragraph!" />
                <Message headline="2. Headline" text="2. Paragraph!" />
            </div>
        );
    }
}

const domTarget = document.querySelector('#my-react-app');
ReactDOM.render(<App />, domTarget);