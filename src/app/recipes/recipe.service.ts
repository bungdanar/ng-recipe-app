import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelectedEvent = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Ramen',
      'Spicy Ramen',
      'https://images.pixexid.com/spicy-ramen-bowl-noodles-swirling-in-a-fiery-red-broth-adorned-with-toppings-mvldomj2.jpeg',
      [
        new Ingredient('meat', 3),
        new Ingredient('noodle', 1),
        new Ingredient('chili oil', 1),
      ]
    ),
    new Recipe(
      'Udon',
      'Shrimp Udon',
      'https://www.hwcmagazine.com/wp-content/uploads/2018/08/Shrimp-Tempura-Udon-Noodles-9.jpg',
      [new Ingredient('shrimp', 3), new Ingredient('udon', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
