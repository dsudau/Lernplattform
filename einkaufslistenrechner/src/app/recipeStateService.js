export const sumRecipes = function (recipes){
    return recipes.reduce((list, recipe) => {
        return [ ...list, ...recipe.ingredients]
    }, []).reduce((list, ingredient) => {
        const existingIngredient = list.find(currentIngredient => currentIngredient.name == ingredient.name);
        if(existingIngredient){
            existingIngredient.amount += ingredient.amount;
        }else{
            list.push(ingredient);
        }
        return list;
    }, [])
}