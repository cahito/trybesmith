import Product from '../interfaces/products.interface';

const validateProductName = (data: Product) => {
  const { name } = data;
  if (!name) {
    const err = new Error('"name" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof name !== 'string') {
    const err = new Error('"name" must be a string');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (name.length < 3) {
    const err = new Error('"name" length must be at least 3 characters long');
    err.name = 'UnprocessableEntity';
    throw err;
  }
};

export default validateProductName;
