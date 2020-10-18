import sequelize from './index';

export async function testAuthenticate() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
  } catch (err) {
    console.error('Unable to connect to db:', err);
  }
}
