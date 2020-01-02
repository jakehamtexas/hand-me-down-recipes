import { RecipeAttachmentType } from './RecipeAttachmentType';
export interface RecipeAttachment {
  type: RecipeAttachmentType;
  fileName: string;
  filePath: string;
  displayName: string;
}
