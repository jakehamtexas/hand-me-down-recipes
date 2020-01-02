import * as mongoose from 'mongoose';
export const initDatabase = () => {
  const HOSTNAME = process.env.HOSTNAME;
  const DATABASE_NAME = process.env.DATABASE_NAME;

  const url = `mongodb://${HOSTNAME}/${DATABASE_NAME}`;
  mongoose.connect(url);
};
