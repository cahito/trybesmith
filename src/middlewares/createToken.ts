import jwt from 'jsonwebtoken';
import User from '../interfaces/users.interface';

const JWT_SECRET = 'Estenaoehumsegredo';

const createToken = (user: User) => {
  const { id, username } = user;
  const data = { id, username };
  const token = jwt.sign({ data }, JWT_SECRET);
  
  return token;
};

export default createToken;
