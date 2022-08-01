import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() itemAddedEvent = new EventEmitter<Ingredient>();

  addItem(name: string, amount: string) {
    let product: Ingredient = { name, amount: parseInt(amount) };
    this.itemAddedEvent.emit(product);
  }
}
