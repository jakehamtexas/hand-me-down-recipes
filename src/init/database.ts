import mongoose from 'mongoose';
export const initDatabase = () => {
  const url = process.env.MONGODB_CONNSTR || '';
  const dbName = process.env.MONGODB_DBNAME;
  mongoose.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName
    },
    err => {
      if (err) {
        console.log(err);
        process.exit();
      }
    }
  );
};
