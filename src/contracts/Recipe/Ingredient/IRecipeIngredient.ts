import { RecipeIngredientSeason } from './RecipeIngredientSeason';
import { IIngredientUnit } from './IIngredientUnit';
export interface IRecipeIngredient {
  quantity: number;
  unit: IIngredientUnit;
  name: string;
  price: number | null;
  season: RecipeIngredientSeason | null;
}
