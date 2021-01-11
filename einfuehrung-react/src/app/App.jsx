import React from 'react';
import { Message } from './Message';

export class App extends React.Component {
    render() {
        return(
            <div>
                <Message headline="1. Headline!" text="1. Paragraph!" />
                <Message headline="2. Headline" text="2. Paragraph!" />
            </div>
        );
    }
}