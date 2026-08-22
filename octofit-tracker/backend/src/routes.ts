import { Router } from 'express';

const routeNames = ['users', 'teams', 'activities', 'leaderboard', 'workouts'] as const;

export function createApiRouter() {
  const router = Router();

  for (const routeName of routeNames) {
    router.get(`/${routeName}/`, (_request, response) => {
      response.json({ data: [], resource: routeName });
    });
  }

  return router;
}