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


const routes = [accountRouter, authorRouter, profileRouter, ressourceRouter, borrowRouter];

const models = {
    accountDao,
    authorDao,
    profileDao,
    ressourceDao,
    borrowDao
}


module.exports = {routes, models};
// const test = [routes, models];

// export default test;
 