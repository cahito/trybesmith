import Login from '../interfaces/login.interface';

const validateLogin = (data: Login) => {
  const { username, password } = data;
  if (!username) {
    const err = new Error('"username" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (!password) {
    const err = new Error('"password" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof username !== 'string' || typeof password !== 'string') {
    const err = new Error('Username or password invalid');
    err.name = 'Unauthorized';
    throw err;
  }
};

export default validateLogin;
