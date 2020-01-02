import { RecipeIngredientUnit } from './RecipeIngredientUnit';
import { RecipeIngredientSeason } from './RecipeIngredientSeason';
export interface IRecipeIngredient {
  quantity: number;
  unit: RecipeIngredientUnit;
  name: string;
  price: number | null;
  season: RecipeIngredientSeason | null;
}
