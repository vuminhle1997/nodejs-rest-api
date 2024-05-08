import * as dotenv from 'dotenv';
import app from './app';
dotenv.config();

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => {
  console.log(`Listens on Port > ${PORT}`);
});
