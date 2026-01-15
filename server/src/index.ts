import express from 'express';
import cors from 'cors';

import { getPerformanceData } from './controllers/campaignController.ts';

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));

// TODO: Change name maybe.
app.get('/api/campaigns', getPerformanceData);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});