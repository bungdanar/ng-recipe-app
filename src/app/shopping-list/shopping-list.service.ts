import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsUpdatedEvent = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(value: Ingredient) {
    this.ingredients.push(value);
    this.ingredientsUpdatedEvent.next(this.getIngredients());
  }

  addIngredients(value: Ingredient[]) {
    this.ingredients.push(...value);
    this.ingredientsUpdatedEvent.next(this.getIngredients());
  }
}
