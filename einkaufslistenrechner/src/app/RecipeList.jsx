import React from 'react';
import {IngredientList} from './IngredientList';
import {RecipeForm} from './RecipeForm/RecipeForm'

export class RecipeList extends React.Component{
    render(){
        const liElements = this.props.recipes.map(recipe => {
            const content = recipe.showEditForm ? 
            (<RecipeForm recipe={recipe} onSave={(changedRecipe) => this.props.onChangeRecipe(recipe.id, changedRecipe)} />)
            : (<IngredientList ingredients={recipe.ingredients} />);
            return (
            <li>
                {recipe.name} (<a onClick={ () => this.props.onToggleEditForm(recipe.id) }>bearbeiten</a>)
                {content}
            </li>);
        });
        return(<ul>
            {liElements}
        </ul>)
    }
}