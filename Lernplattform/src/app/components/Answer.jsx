import React from 'react';

export class Answer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            correct: false
        }
    }
    render () {
        return (
            <div>
                <p>Aufgabe</p>
            </div>
        );
    }
}