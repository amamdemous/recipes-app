import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}

  ingredients: Ingredient[] = [
    new Ingredient('Butter', 100),
    new Ingredient('Rice', 45),
  ];
  ngOnInit(): void {}
}
