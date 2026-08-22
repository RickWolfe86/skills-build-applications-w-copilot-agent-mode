import { Router } from 'express';
import { Activity, Leaderboard, Team, User, Workout } from './models/index.js';

const routes = [
  ['users', User],
  ['teams', Team],
  ['activities', Activity],
  ['leaderboard', Leaderboard],
  ['workouts', Workout],
] as const;

export function createApiRouter() {
  const router = Router();

  for (const [routeName, model] of routes) {
    router.get(`/${routeName}/`, async (_request, response, next) => {
      try {
        const data = await model.find().lean();
        response.json({ data, resource: routeName });
      } catch (error) {
        next(error);
      }
    });
  }

  return router;
}