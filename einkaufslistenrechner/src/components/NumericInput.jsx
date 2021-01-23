import React from 'react';

const regExp = /^\d*\.?\d*$/;
export class NumericInput extends React.Component{
    handleChange(event){
        if(regExp.test(event.target.value)){
            this.props.onChange(event);
        }
    }
    render (){
        return(<input
        type="text"
        name={this.props.name}
        value={this.props.value}
        onChange={(event) => this.handleChange(event)}
        />
        );
    }
}