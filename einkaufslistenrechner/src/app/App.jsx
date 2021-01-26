import React from 'react';
import {IngredientList} from './IngredientList';
import {addRecipe, sumRecipes, toggleEditForm, changeRecipe} from './recipeStateService';
import {RecipeForm} from './RecipeForm/RecipeForm';
import {RecipeList} from './RecipeList';
import {Tab} from '../components/tabs/Tab';
import {TabController} from '../components/tabs/TabController';

export class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
          recipes: []
        }
        this.handleAddRecipe = this.handleAddRecipe.bind(this);
        this.handleToggleEditForm = this.handleToggleEditForm.bind(this);
        this.handleChangeRecipe = this.handleChangeRecipe.bind(this);
    }

    componentDidMount(){
      fetch('http://localhost:3000/recipes')
      .then(response => response.json())
      .then(recipes => {
        this.setState({
          recipes
        });
      });
    }

    handleAddRecipe(newRecipe){
      this.setState(currentState => {
          return {
            ...currentState,
            recipes: addRecipe(currentState.recipes, newRecipe)
          };
      });
    }
    handleToggleEditForm(id){
      this.setState(currentState => {
        return {
          ...currentState,
          recipes: toggleEditForm(currentState.recipes, id)
        }
      })
    }
    handleChangeRecipe(id, changedRecipe){
      this.setState( currentState => {
        return {
          ...currentState,
          recipes: changeRecipe(currentState.recipes, id, changedRecipe)
        }
      });
    }
    render(){
        return(
            <TabController>
                <Tab headline="Einkaufsliste">
                  <IngredientList ingredients={sumRecipes(this.state.recipes)} />
                </Tab>
                <Tab headline="Repzepte">
                  <RecipeList recipes={this.state.recipes} onToggleEditForm={this.handleToggleEditForm} onChangeRecipe={this.handleChangeRecipe} />
                </Tab>
                <Tab headline="Rezept hinzufügen">
                  <RecipeForm onSave={this.handleAddRecipe} />
                </Tab>
            </TabController>
        );
    }
}