import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];


  constructor() { }

  addIngredient (event) {
    this.ingredients.push(event)
  }
  deleteIngredient(event){
    this.ingredients = this.ingredients.filter(items => items !== event)
  }

  clearIngredient (event) {

    console.log("Cleared Ingredients")
    this.ingredients = event;
  }

  ngOnInit() {
  }

}
