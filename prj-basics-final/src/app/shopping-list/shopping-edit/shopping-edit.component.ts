import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @ViewChild("name") name: ElementRef;
  @ViewChild("amount") amount: ElementRef;
  @ViewChild("description") description: ElementRef;
  @ViewChild("imageUrl") imageUrl: ElementRef;

  @Output() ingredientItem = new EventEmitter<Ingredient>();

  onAddIngredient() {
    this.ingredientItem.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value,
    });

    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
    this.description.nativeElement.value = "";
    this.imageUrl.nativeElement.value = "";
  }

  @Output() clearIngredients = new EventEmitter<[]>()

  clearIngredient () {
    this.clearIngredients.emit([])
  }
}
