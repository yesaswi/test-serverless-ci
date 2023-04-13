import { HttpFunction } from '@google-cloud/functions-framework';

export const api: HttpFunction = (req, res) => {
  res.send('Hello World!');
};
