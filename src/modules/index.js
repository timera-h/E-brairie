import accountRouter from './Account';
import authorRouter from './Author';
import profileRouter from './Profile';
import accountDao from './Account/dao';
import authorDao from './Author/dao';
import profileDao from './Profile/dao';

const routes = [accountRouter, authorRouter, profileRouter];

const models = {
    accountDao,
    authorDao,
    profileDao
}


module.exports = {routes, models};
// const test = [routes, models];

// export default test;
 