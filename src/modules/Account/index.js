import {Router} from 'express';
import bcrypt from 'bcrypt';
import {DataTypes} from 'sequelize';
import {jwtService} from '../../libs';
import {auth} from '../../middlewares';
import db from '../../config/database';
import Profile from '../Profile/dao';

import Account from './dao';
import AccountRepository from './repository';
import AccountService from './service';
import AccountController from './controller';
import AccountRouter from './router';

const router = Router();
const profileDao = Profile.init(db.sequelize, DataTypes);
const accountDao = Account.init(db.sequelize, DataTypes);
const accountRepository = new AccountRepository(accountDao);
const accountService = new AccountService(accountRepository, bcrypt, profileDao);
const accountController = new AccountController({accountService, jwt: jwtService});
const accountRouter = new AccountRouter({router, auth, accountController});

export {accountService, accountDao};

export default accountRouter;