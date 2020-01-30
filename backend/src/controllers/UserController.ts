import { Request, Response } from 'express';

interface User {
  id: number;
  name: string;
}

const users = [];

class UserController {
  public index(request: Request, response: Response): Response {
    return response.json(users);
  }

  public show(request: Request, response: Response): Response {
    const { id } = request.params;

    const userIndex = users.find(
      (user: User) => Number(user.id) === Number(id),
    );

    if (!userIndex || userIndex < 0) {
      return response.status(400).json({ error: 'User does not exists' });
    }

    return response.json(users[userIndex]);
  }

  public store(request: Request, response: Response): Response {
    const user = request.body;

    users.push(user);

    return response.json(user);
  }
}

export default new UserController();
