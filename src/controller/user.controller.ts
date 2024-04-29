import { Request, Response } from 'express';

export interface User {
  id?: number;
  username: string;
  email: string;
}

const users: User[] = [];

export const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ users: users });
};

export const createUser = (req: Request, res: Response) => {
  const body: User = req.body;
  if (!body.email && !body.username) {
    res.status(400).json({ error: 'Missing email & username' });
  } else {
    const obj = {
      ...body,
      id: users.length + 1,
    };
    users.push(obj);
    res.status(200).json({ user: obj });
  }
};
