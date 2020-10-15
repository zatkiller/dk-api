import { Sequelize } from 'sequelize';

let connectionUri = process.env.DATABASE_URL || '';
const db = new Sequelize(connectionUri);

export default db;
