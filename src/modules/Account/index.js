import {Router} from 'express';
import bcrypt from 'bcrypt';
import {DataTypes} from 'sequelize';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';
import db from '../../config/database';


import Account from './dao';
import AccountRepository from './repository';
import AccountService from './service';
import AccountController from './controller';
import AccountRouter from './router';

const router = Router();
const accountDao = Account.init(db.sequelize, DataTypes);
const accountRepository = new AccountRepository(accountDao);
const accountService = new AccountService(accountRepository);
const accountController = new AccountController({accountService, mailer: mailerService, jwt: jwtService, bcrypt});
const accountRouter = new AccountRouter({router, auth, accountController});

export {accountService, accountDao};

export default accountRouter;