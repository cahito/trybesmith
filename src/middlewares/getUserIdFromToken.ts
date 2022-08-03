import jwt from 'jsonwebtoken';

const JWT_SECRET = 'Estenaoehumsegredo';

const getUserIdFromToken = (token: string) => {
  const data = JSON.stringify(jwt.verify(token, JWT_SECRET));
  if (typeof data === 'string') {
    const myObj = JSON.parse(data);
    const neededId = myObj.data.id;
    const userId = neededId;
    return userId;
  }
  const userId = 0;

  return userId;
};

export default getUserIdFromToken;
