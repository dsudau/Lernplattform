import React from 'react';
import { NameInput } from './NameInput';
import { TShirtSizeSelect } from './TShirtSizeSelect'
import { LunchCheckbox } from "./LunchCheckbox";

const emptyForm = {
    name: '',
    tShirtSize: 'w-s',
    lunch: false,
    formSubmitted: false
}
export class RegisterForm extends React.Component {
    constructor(props){
        super(props);

        this.state = emptyForm;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
    }
    handleChange(event) {
        const value = event.target.name == 'lunch' ? event.target.checked : event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }
    handleSubmit(){
        this.setState({
            formSubmitted: true   
        });
    }
    handleResetForm(){
        this.setState(emptyForm);
    }
    render() {
        if(!this.state.formSubmitted){
            return (
                <div>
                    <NameInput value = { this.state.name } onChange = { this.handleChange } />
                    <TShirtSizeSelect value = {this.state.tShirtSize } onChange = { this.handleChange } />
                    <LunchCheckbox value = {this.state.lunch } onChange = { this.handleChange } />
                    <button onClick={this.handleSubmit}>Anmelden</button>
                </div>
            );
        }else{
            return (
                <div>
                    <h2>Du hst dich erfolgreich für den Kurs angemeldet :)</h2>
                    <button onClick={this.handleResetForm}>weiteren Teilnehmer anmelden</button>
                </div>
            );
        };

    }
}