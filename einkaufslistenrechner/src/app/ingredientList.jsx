import React from 'react';

export class IngredientList extends React.Component{
    render(){
        const liElements = this.props.ingredients.map((ingredient, index) =>
        (<li key={`${index}-ingredient`}>
                {ingredient.amount} {ingredient.unit} {ingredient.name}
            </li>)
        );
        return(
            <ul>
                {liElements}
            </ul>
        );
    }
}