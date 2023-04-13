import { api } from '../src/index';
import { Request, Response } from '@google-cloud/functions-framework';

describe('Hello World Cloud Function', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {};
    res = {
      send: jest.fn(),
    };
  });

  it('should send "Hello World!"', () => {
    api(req as Request, res as Response);

    expect(res.send).toHaveBeenCalledWith(
      'Hello World!'
    );
  });
});
