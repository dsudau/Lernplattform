import React from 'react';

export class Task extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
            name: '',
            question: '',
            answers: [],
            key: 0
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