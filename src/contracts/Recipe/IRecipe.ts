import { IDocumentable } from '../Entity/IDocumentable';
import { IRecipeAttachment } from './IRecipeAttachment';
import { IRecipeIngredient } from './IRecipeIngredient';
import { IRecipeStep } from './IRecipeStep';

export interface IRecipe extends IDocumentable {
  recipeName?: string;
  description?: string;
  notes?: string;
  ingredients?: Array<IRecipeIngredient> | null;
  steps?: Array<IRecipeStep> | null;
  attachments?: Array<IRecipeAttachment> | null;
}
