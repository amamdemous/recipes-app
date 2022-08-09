import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private shoppingListService: ShoppingListService) {}

  ingredients!: Ingredient[];
  private subscribtion!: Subscription;

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscribtion = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
