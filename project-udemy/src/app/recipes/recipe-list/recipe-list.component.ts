import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected= new EventEmitter<Recipe>();

 recipes: Recipe[] = [
     new Recipe("Test Recipe", "this is for testing purpose", "https://www.google.com/search?q=images+recipe&tbm=isch&ved=2ahUKEwi67OHH2vX3AhX2zaACHUaFCQoQ2-cCegQIABAA&oq=images+recipe&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQHhAFMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIOgcIABCxAxBDOgQIABBDUPwGWNAMYIoOaABwAHgAgAHsAYgBjAySAQMyLTeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=YImLYrq8Lfabg8UPxoqmUA&bih=661&biw=1360#imgrc=2ZUZnZVXTOUYuM" )
,    new Recipe("Test Recipe", "this is for testing purpose", "https://www.google.com/search?q=images+recipe&tbm=isch&ved=2ahUKEwi67OHH2vX3AhX2zaACHUaFCQoQ2-cCegQIABAA&oq=images+recipe&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQHhAFMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIOgcIABCxAxBDOgQIABBDUPwGWNAMYIoOaABwAHgAgAHsAYgBjAySAQMyLTeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=YImLYrq8Lfabg8UPxoqmUA&bih=661&biw=1360#imgrc=2ZUZnZVXTOUYuM" )

  ];



  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
