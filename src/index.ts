import * as dotenv from 'dotenv';
import express = require('./app');
dotenv.config();

const PORT = process.env.PORT || 4200;

express.listen(PORT, () => {
  console.log(`Listens on Port > ${PORT}`);
});
