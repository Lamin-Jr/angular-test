import { Component, EventEmitter, OnInit, Output } from "@angular/core";

import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: "A Test Recipe",
      description: "This is simply a test",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
    },
    {
      name: "Orange",
      description: "This is simply a test",
      imagePath:
        "http://orfiagro.com/wp-content/uploads/2020/10/orange-1hoca2l.jpg",
    },
    {
      name: "Mango",
      description: "This is simply a test",
      imagePath:
        "https://st.depositphotos.com/1642482/3698/i/950/depositphotos_36983317-stock-photo-mango.jpg",
    },
  ];

  @Output() addedRecipe = new EventEmitter<Recipe>();

  addRecipe(event) {
    this.addedRecipe.emit(event);
  }

  constructor() {}

  ngOnInit() {}
}
