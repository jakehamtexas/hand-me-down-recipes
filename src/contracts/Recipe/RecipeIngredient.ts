import { RecipeIngredientUnit } from './RecipeIngredientUnit';
import { RecipeIngredientSeason } from './RecipeIngredientSeason';
export interface RecipeIngredient {
  quantity: number;
  unit: RecipeIngredientUnit;
  name: string;
  price: number | null;
  season: RecipeIngredientSeason | null;
}
