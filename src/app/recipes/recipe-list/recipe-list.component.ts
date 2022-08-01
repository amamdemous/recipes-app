import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  recipes: Recipe[] = [
    new Recipe(
      'A Test recipe',
      'Tasty rice',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
    new Recipe(
      'Apple',
      'Salad',
      'https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g='
    ),
  ];

  @Output() onRecipeChosenEvent = new EventEmitter<Recipe>();
  ngOnInit(): void {}

  recipeSelected(recipe: Recipe) {
    this.onRecipeChosenEvent.emit(recipe);
  }
}
