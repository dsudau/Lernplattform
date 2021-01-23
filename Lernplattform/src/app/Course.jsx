import React from 'react';
import {Task} from './Task';

export class Course extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            description: '',
            tasks: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState(state => {
            state.value = this.state.value;
            console.log(event);
            return state;
        });
    }
    render () {
        return (
            <div>
                <input 
                    type="text"
                    placeholder="Kursname"
                    onChange={this.handleChange}
                />
                <p>Aufgabe</p>
            </div>
        );
    }
}