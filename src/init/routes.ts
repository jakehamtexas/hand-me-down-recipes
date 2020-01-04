import Express from 'express';
import RecipeManager from '../managers/RecipeManager';
import InitManager from '../managers/InitManager';
const setRoutes = (app: Express.Application) => {
  setRecipeRoutes(app);
  setInitRoutes(app);
  setIntegrationTestRoutes(app);
};

const setRecipeRoutes = (app: Express.Application) => {
  app.post('/v1/recipe', async (req, res) => {
    const recipe = req.body.recipe;
    const id = await RecipeManager.create(recipe);
    res.send(id);
  });
  app.get('/v1/recipe', async (_req, res) => {
    const recipes = await RecipeManager.list();
    res.send(recipes);
  });
  app.put('/v1/recipe', async (req, _res) => {
    const recipe = req.body.recipe;
    RecipeManager.update(recipe);
  });
  app.delete('/v1/recipe', async (req, _res) => {
    const recipe = req.body.recipe;
    RecipeManager.destroy(recipe);
  });
};

const setIntegrationTestRoutes = (app: Express.Application) => {
  app.get('/v1/test', async (_req, _res) => {
    await RecipeManager.test();
  });
};

const setInitRoutes = (app: Express.Application) => {
  app.get('/v1/init', async (_req, res) => {
    const anhydrousModels = InitManager.anhydrousModels();
    const initData = {
      ...anhydrousModels
    };
    res.send(initData);
  });
};

export { setRoutes };
