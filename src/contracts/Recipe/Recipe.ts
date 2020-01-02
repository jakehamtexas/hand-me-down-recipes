import { IRecipeIngredient } from './IRecipeIngredient';
import { IRecipeStep } from './IRecipeStep';
import { IRecipeAttachment } from './IRecipeAttachment';
import { IRecipe } from './IRecipe';

import { prop, Typegoose } from '@hasezoey/typegoose';
export class Recipe extends Typegoose implements IRecipe {
  @prop({ required: true })
  recipeName?: string;
  @prop()
  description?: string;
  @prop()
  notes?: string;
  @prop()
  ingredients?: Array<IRecipeIngredient> | null;
  @prop()
  steps?: Array<IRecipeStep> | null;
  @prop()
  attachments?: Array<IRecipeAttachment> | null;
  @prop()
  id?: any;
}
