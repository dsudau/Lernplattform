import React from 'react';
import {IngredientFormPart} from './IngredientFormPart';

import './RecipeForm.css';

const createEmptyIngredient = () => ({
    name: '',
    amount: '',
    unit: 'Stück'
})
const emptyRecipe = {
    name: '',
    ingredients: [
        createEmptyIngredient()
    ]
}

export class RecipeForm extends React.Component{
    constructor(props){
        super(props);
        if(props.recipe){
            this.state = {
            name: props.recipe.name,
            ingredients: [
                ...props.recipe.ingredients
            ]};
        }else{
            this.state = emptyRecipe;
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRecipeSave = this.handleRecipeSave.bind(this);
    }
    handleNameChange(event){
        this.setState({
            name: event.target.value
        });
    }
    handleAddIngredient(){
        this.setState(currentState => {
            return {
                ...currentState,
                ingredients: [
                    ...currentState.ingredients,
                    createEmptyIngredient()
                ]
            }
        })
    }
    handleIngredientChange(event, ingredientName){
        const {value, name} = event.target;
        this.setState(currentState => ({
            ...currentState,
            ingredients: currentState.ingredients.map(ingredient => {
                if(ingredient.name == ingredientName){
                    return {
                        ...ingredient,
                        [name]: value
                    }
                }
                return ingredient;
            })
        }));
    }
    handleRecipeSave(){
        const finishedIngredients = this.state.ingredients.map(ingredient => ({
            ...ingredient,
            amount: Number.parseFloat(ingredient.amount)
        }));

        this.props.onSave({
            name: this.state.name,
            ingredients: finishedIngredients

        });

        this.setState(emptyRecipe);
    }
    render(){
        const ingredientFormParts = this.state.ingredients.map((ingredient, index) => {
            return (
                <IngredientFormPart
                key={`${index}-ingredient`}
                ingredient={ingredient}
                onChange={(event) => this.handleIngredientChange(event, ingredient.name)}
                />
            );
        });
        return(
            <form>
                <label>
                    Name des Rezept:
                    <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                    />
                </label>
                <article>
                    <label>
                        Zutaten
                        {ingredientFormParts}
                    </label>
                    <button type="button" onClick={() => this.handleAddIngredient()}>Zutat hinzufügen</button>
                </article>
                <button type="button" onClick={this.handleRecipeSave}>Speichern</button>
            </form>
        );
    }
}