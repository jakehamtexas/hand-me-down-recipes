import { RecipeIngredient } from './RecipeIngredient';
import { RecipeStep } from './RecipeStep';
import { RecipeAttachment } from './RecipeAttachment';

import { prop, Typegoose } from 'typegoose';
export class Recipe extends Typegoose {
  @prop({ required: true })
  recipeName?: string;
  @prop()
  description?: string;
  @prop()
  notes?: string;
  @prop()
  ingredients?: Array<RecipeIngredient> | null;
  @prop()
  steps?: Array<RecipeStep> | null;
  @prop()
  attachments?: Array<RecipeAttachment> | null;
  @prop()
  id?: any;
}
