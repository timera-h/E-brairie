import accountRouter from './Account';
import authorRouter from './Author';
import profileRouter from './Profile';
import ressourceRouter from './Ressource';
import borrowRouter from './Borrow';
import accountDao from './Account/dao';
import authorDao from './Author/dao';
import profileDao from './Profile/dao';
import ressourceDao from './Ressource/dao'
import borrowDao from './Borrow/dao'
import db from '../config/database';


const routes = [accountRouter, authorRouter, profileRouter, ressourceRouter, borrowRouter];

const models = {
    accountDao,
    authorDao,
    profileDao,
    ressourceDao,
    borrowDao
}

const modelArray = [
    accountDao,
    authorDao,
    profileDao,
    ressourceDao,
    borrowDao
];
modelArray.map(dao => {
    dao.associate(models);
});

db.sequelize.sync()
// sequelize.authenticate()
.then(() => {
    console.log('connecté ');
})
.catch((e) => {
    console.error(e);
})


export default routes;
// const test = [routes, models];

// export default test;
 