import express, { Express } from "express";

export function initApp(): Express {
  const app: Express = express();

  return app;
}
