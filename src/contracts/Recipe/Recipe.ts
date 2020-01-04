import { IRecipeIngredient } from './IRecipeIngredient';
import { IRecipeStep } from './IRecipeStep';
import { IRecipeAttachment } from './IRecipeAttachment';
import { IRecipe } from './IRecipe';

import { prop, Typegoose } from '@hasezoey/typegoose';
import { IEquipment } from './IEqupiment';
export class Recipe extends Typegoose implements IRecipe {
  @prop({ required: true })
  name?: string;
  @prop()
  description?: string;
  @prop()
  note?: string;
  @prop()
  ingredients?: Array<IRecipeIngredient> | null;
  @prop()
  steps?: Array<IRecipeStep> | null;
  @prop()
  attachments?: Array<IRecipeAttachment> | null;
  @prop()
  id?: any;
  @prop()
  equipments?: Array<IEquipment> | null;
}
