import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // @Input() recipe:Recipe |any;


  recipe:Recipe |any;
  id:number |any;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onPassToShoppingList(){
    console.log(this.recipe.ingredient);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
