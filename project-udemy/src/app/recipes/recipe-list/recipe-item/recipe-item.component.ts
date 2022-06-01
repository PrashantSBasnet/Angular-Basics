import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe | any;
  //@Output() recipeSelected = new EventEmitter<void>();

 // constructor() { }

  ngOnInit() {
  }

  // onSelected() {
  //   this.recipeSelected.emit();
  // }

  //using cross component service communicator

  constructor(private respiceService: RecipeService){}
  onSelected(){
    this.respiceService.recipeSelected.emit(this.recipe);
  }

}
