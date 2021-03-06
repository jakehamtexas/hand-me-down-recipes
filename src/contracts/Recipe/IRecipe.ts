import { IDocumentable } from '../Entity/IDocumentable';
import { IRecipeAttachment } from './IRecipeAttachment';
import { IRecipeIngredient } from './Ingredient';
import { IRecipeStep } from './IRecipeStep';
import { IEquipment } from './IEqupiment';

export interface IRecipe extends IDocumentable {
  name?: string;
  description?: string;
  note?: string;
  ingredients?: Array<IRecipeIngredient> | null;
  steps?: Array<IRecipeStep> | null;
  attachments?: Array<IRecipeAttachment> | null;
  equipments?: Array<IEquipment> | null;
}
