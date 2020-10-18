import {Sequelize} from 'sequelize';

const connectionUri = process.env.DATABASE_URL || '';
const sequelize = new Sequelize(connectionUri);

export default sequelize;
