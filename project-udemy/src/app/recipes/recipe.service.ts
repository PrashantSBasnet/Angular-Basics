import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{

  //using service for cross component communication
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "this is for testing purpose", "" )

 ];


 getRecipes(){
   return this.recipes.slice();
 }

}
