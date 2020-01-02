import Express from 'express';
import RecipeManager from '../managers/RecipeManager';
const setRoutes = (app: Express.Application) => {
  app.post('/v1/recipe', async (req, _res) => {
    const recipe = req.body.recipe;
    await RecipeManager.create(recipe);
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
  app.get('/v1/test', async (_req, _res) => {
    await RecipeManager.test();
  });
};

export { setRoutes };
