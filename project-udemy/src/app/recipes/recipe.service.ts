import { Recipe } from './recipe.model';

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe("Test Recipe", "this is for testing purpose", "https://www.google.com/search?q=images+recipe&tbm=isch&ved=2ahUKEwi67OHH2vX3AhX2zaACHUaFCQoQ2-cCegQIABAA&oq=images+recipe&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQHhAFMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIOgcIABCxAxBDOgQIABBDUPwGWNAMYIoOaABwAHgAgAHsAYgBjAySAQMyLTeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=YImLYrq8Lfabg8UPxoqmUA&bih=661&biw=1360#imgrc=2ZUZnZVXTOUYuM" ),    new Recipe("Test Recipe", "this is for testing purpose", "https://www.google.com/search?q=images+recipe&tbm=isch&ved=2ahUKEwi67OHH2vX3AhX2zaACHUaFCQoQ2-cCegQIABAA&oq=images+recipe&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIGCAAQHhAFMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIMgYIABAeEAgyBggAEB4QCDIGCAAQHhAIOgcIABCxAxBDOgQIABBDUPwGWNAMYIoOaABwAHgAgAHsAYgBjAySAQMyLTeYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=YImLYrq8Lfabg8UPxoqmUA&bih=661&biw=1360#imgrc=2ZUZnZVXTOUYuM" )

 ];


 getRecipes(){
   return this.recipes.slice();
 }

}
