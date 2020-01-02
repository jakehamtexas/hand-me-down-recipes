import { Recipe } from '../contracts/Recipe/Recipe';
import { RecipeEntity } from '../contracts/Entity/RecipeEntity';
import { IRecipe } from '../contracts/Recipe/IRecipe';
import { getAsAnemicModel } from './getAsAnemicModel';

class RecipeManager {
  public async create(recipe: IRecipe): Promise<IRecipe> {
    const entity = new RecipeEntity(recipe);
    const document = await entity.save();
    return getAsAnemicModel(Recipe, document.toObject());
  }
  public async list(): Promise<Array<IRecipe>> {
    const entities = await RecipeEntity.find({});
    return entities.map(entity =>
      getAsAnemicModel<Recipe>(Recipe, entity.toObject())
    );
  }

  public async update(recipe: IRecipe): Promise<IRecipe | null> {
    const document =
      (await RecipeEntity.findById(recipe.id, null, (_err, doc) => {
        Object.assign(doc, recipe);
        if (doc != null) {
          doc.save();
        }
      })) || new RecipeEntity();
    return getAsAnemicModel(Recipe, document.toObject());
  }
  public async destroy(recipe: IRecipe) {
    await RecipeEntity.findOneAndDelete(recipe.id, (_err, _doc) => {});
  }

  public async test() {
    //Integration tests/one offs.
  }
}

export default new RecipeManager();
