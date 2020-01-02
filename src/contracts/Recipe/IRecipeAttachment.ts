import { RecipeAttachmentType } from './RecipeAttachmentType';
export interface IRecipeAttachment {
  type: RecipeAttachmentType;
  fileName: string;
  filePath: string;
  displayName: string;
}
