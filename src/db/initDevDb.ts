import sequelize from 'sequelize';
import db from './index';

export async function testAuthenticate() {
  try {
    await db.authenticate();
    console.log("Connection has been established successfully");
  } catch (err) {
    console.error('Unable to connect to db:', err);
  }
}

