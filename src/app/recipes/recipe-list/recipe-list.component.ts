import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Ramen',
      'Spicy Ramen',
      'https://images.pixexid.com/spicy-ramen-bowl-noodles-swirling-in-a-fiery-red-broth-adorned-with-toppings-mvldomj2.jpeg'
    ),
    new Recipe(
      'Udon',
      'Shrimp Udon',
      'https://www.hwcmagazine.com/wp-content/uploads/2018/08/Shrimp-Tempura-Udon-Noodles-9.jpg'
    ),
  ];
}
