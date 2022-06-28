import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable({ providedIn: "root" })
export class RecipeRisolver implements Resolve<Recipe[]> {
  constructor(
    private dataStorage: DataStorageService,
    protected recipes: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const recipe = this.recipes.getRecipes();
    if (recipe.length === 0) {
      return this.dataStorage.fetchRecipes().subscribe();
    } else {
      return recipe;
    }
  }
}
