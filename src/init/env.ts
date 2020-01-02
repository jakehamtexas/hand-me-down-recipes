import dotenv from 'dotenv';
export const initEnvironment = () => {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
  }
};
