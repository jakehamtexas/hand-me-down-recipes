import { Recipe } from './contracts/Recipe/Recipe';
import { RecipeEntity } from './contracts/Entity/RecipeEntity';

class RecipeManager {
  public async create(recipe: Recipe): Promise<Recipe> {
    const entity = new RecipeEntity(recipe);
    return await entity.save();
  }
  public async list(): Promise<Array<Recipe>> {
    return await RecipeEntity.find({});
  }
  public async update(recipe: Recipe): Promise<Recipe | null> {
    return await RecipeEntity.findById(recipe.id, null, (_err, doc) => {
      Object.assign(doc, recipe);
      if (doc != null) {
        doc.save();
      }
    });
  }
  public async destroy(recipe: Recipe) {
    await RecipeEntity.findOneAndDelete(recipe.id, (_err, _doc) => {});
  }
}

export default new RecipeManager();
