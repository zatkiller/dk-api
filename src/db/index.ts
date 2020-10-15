import {Sequelize} from 'sequelize';

const connectionUri = process.env.DATABASE_URL || '';
const db = new Sequelize(connectionUri);

export default db;
