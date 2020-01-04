import {
  RecipeAttachmentType,
  IRecipe,
  IEquipment,
  IRecipeAttachment,
  IRecipeStep,
  Recipe
} from '../contracts/Recipe';
import {
  IRecipeIngredient,
  RecipeIngredientSeason,
  RecipeIngredientUnitType,
  RecipeIngredientImperialVolumeUnit,
  RecipeIngredientImperialWeightUnit,
  IIngredientUnit,
  RecipeIngredientMetricVolumeUnit
} from '../contracts/Recipe/Ingredient';

const getDefaultIRecipe = (): IRecipe => {
  const stub: Recipe = new Recipe();
  const attachmentType: RecipeAttachmentType = RecipeAttachmentType.jpg;
  const attachments: Array<IRecipeAttachment> = [
    {
      displayName: '',
      type: attachmentType,
      fileName: '',
      filePath: ''
    }
  ];
  stub.attachments = attachments;
  stub.description = '';
  const equipment: Array<IEquipment> = [
    {
      name: '',
      quantity: 0
    }
  ];
  stub.equipments = equipment;
  stub.id = null;
  const ingredientUnit: IIngredientUnit = {
    type: RecipeIngredientUnitType.VolumeImperial,
    value: RecipeIngredientImperialVolumeUnit.Teaspoon
  };
  const ingredientSeason: RecipeIngredientSeason =
    RecipeIngredientSeason.summer;
  const ingredients: Array<IRecipeIngredient> = [
    {
      quantity: 0,
      unit: ingredientUnit,
      name: '',
      price: 0,
      season: ingredientSeason
    }
  ];
  stub.ingredients = ingredients;
  stub.name = '';
  stub.note = '';
  const steps: Array<IRecipeStep> = [
    {
      index: -1,
      description: ''
    }
  ];
  stub.steps = steps;
  return stub;
};

const getEnumKeyValuePairs = (enumObject: {}): object =>
  Object.entries(enumObject)
    .filter(entry => isNaN(Number(entry[0])))
    .reduce(
      (obj, entry) => ({
        ...obj,
        [entry[0]]: entry[1]
      }),
      {}
    );
class InitManager {
  public anhydrousModels(): any {
    return {
      recipe: {
        RecipeAttachmentType: getEnumKeyValuePairs(RecipeAttachmentType),
        RecipeIngredientSeason: getEnumKeyValuePairs(RecipeIngredientSeason),
        RecipeIngredientUnitType: getEnumKeyValuePairs(
          RecipeIngredientUnitType
        ),
        RecipeIngredientImperialVolumeUnit: getEnumKeyValuePairs(
          RecipeIngredientImperialVolumeUnit
        ),
        RecipeIngredientImperialWeightUnit: getEnumKeyValuePairs(
          RecipeIngredientImperialWeightUnit
        ),
        RecipeIngredientMetricVolumeUnit: getEnumKeyValuePairs(
          RecipeIngredientMetricVolumeUnit
        ),
        RecipeIngredientImperialWeightUnit: getEnumKeyValuePairs(
          RecipeIngredientImperialWeightUnit
        ),
        IRecipe: getDefaultIRecipe()
      }
    };
  }
}

export default new InitManager();
