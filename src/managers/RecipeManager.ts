import { Recipe } from '../contracts/Recipe/Recipe';
import { RecipeEntity } from '../contracts/Entity/RecipeEntity';
import { IRecipe } from '../contracts/Recipe/IRecipe';
import { IDocumentable } from '../contracts/Entity/IDocumentable';

class RecipeManager {
  public async create(recipe: IRecipe): Promise<IRecipe> {
    const entity = new RecipeEntity(recipe);
    const document = await entity.save();
    return this.getWithProperties(new Recipe(), document.toObject());
  }
  public async list(): Promise<Array<IRecipe>> {
    const entities = await RecipeEntity.find({});
    return entities.map(entity =>
      this.getWithProperties<Recipe>(new Recipe(), entity.toObject())
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
    return this.getWithProperties(new Recipe(), document.toObject());
  }
  public async destroy(recipe: IRecipe) {
    await RecipeEntity.findOneAndDelete(recipe.id, (_err, _doc) => {});
  }

  private getWithProperties<T extends IDocumentable>(
    anemicModel: T,
    document: object
  ): T {
    const mongoKeys = ['__v', '_id'];
    anemicModel = Object.assign(
      anemicModel,
      Object.entries(document)
        .filter(entry => !mongoKeys.includes(entry[0]))
        .reduce(
          (obj, entry) => ({
            ...obj,
            [entry[0]]: entry[1]
          }),
          {}
        )
    );
    const idEntry = Object.entries(document).find(entry => entry[0] === '_id');
    anemicModel.id = idEntry ? idEntry[1] : null;
    return anemicModel;
  }

  public async test() {
    //Integration tests/one offs.
  }
}

export default new RecipeManager();
