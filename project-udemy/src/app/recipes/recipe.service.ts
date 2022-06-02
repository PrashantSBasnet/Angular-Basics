import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

  //using service for cross component communication
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "this is for testing purpose", "", [
      new Ingredient('Meat',1),
      new Ingredient('French Fries', 10)
    ]),
    new Recipe("Second Recipe", "this is also for testing purpose", "", [
      new Ingredient('Buns', 2),
      new Ingredient('Cheese', 2)
    ]  )

 ];

 //injecting service in service using @Injectable
 constructor(private slService: ShoppingListService){}

 getRecipes(){
   return this.recipes.slice();
 }

 getRecipe(index:number){
   return this.recipes[index];
 }

 addIngredientsToShoppingList(ingredients: Ingredient[]){
   this.slService.addIngredients(ingredients);
 }
}
