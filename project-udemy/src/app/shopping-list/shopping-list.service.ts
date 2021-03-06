import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();

   ingredients : Ingredient[] = [
    new Ingredient('Apples', 3),
    new Ingredient('Tomatoes', 3),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  //from recipe
  addIngredients(ingredients:Ingredient[]){
    //using for loop, multiple events are emitted
    //  for (let ingredient of ingredients){
    //    this.addIngredient(ingredient);
    //  }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
