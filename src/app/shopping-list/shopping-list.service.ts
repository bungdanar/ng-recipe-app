import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsUpdatedEvent = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 3),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(value: Ingredient) {
    this.ingredients.push(value);
    this.ingredientsUpdatedEvent.emit(this.getIngredients());
  }

  addIngredients(value: Ingredient[]) {
    this.ingredients.push(...value);
    this.ingredientsUpdatedEvent.emit(this.getIngredients());
  }
}
