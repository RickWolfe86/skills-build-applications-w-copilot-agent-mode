import cors from 'cors';
import express from 'express';
import { createApiRouter } from './routes.js';

const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
export const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', createApiRouter());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.get('/api/config', (_request, response) => {
  response.json({ baseUrl });
});