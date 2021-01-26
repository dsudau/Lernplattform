export const sumRecipes = function (recipes){
    return recipes.reduce((list, recipe) => {
        return [ ...list, ...recipe.ingredients]
    }, []).reduce((list, ingredient) => {
        const existingIngredient = list.find(currentIngredient => currentIngredient.name == ingredient.name);
        if(existingIngredient){
            existingIngredient.amount += ingredient.amount;
        }else{
            list.push({...ingredient});
        }
        return list;
    }, [])
}

export const addRecipe = function(recipes, newRecipe){
    return [
        ...recipes,
        {
          id: recipes.length + 1,
          showEditForm: false,
          ...newRecipe
        }
      ]
}

export const toggleEditForm = function(recipes, id) {
    return recipes.map(recipe => {
        if(recipe.id == id) {
          return {
            ...recipe,
            showEditForm: !recipe.showEditForm
          }
        }
        return recipe;
      })
}

export const changeRecipe = function(recipes, id, changedRecipe){
    return recipes.map(recipe => {
        if(recipe.id == id){
            return{
                ...recipe,
                ...changedRecipe,
                showEditForm: false
            }
        }
        return recipe;
    });
}