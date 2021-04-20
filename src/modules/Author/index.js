import {Router} from 'express';
import {DataTypes} from 'sequelize';
import db from '../../config/database';

import Author from './dao';
import AuthorRepository from './repository';
import AuthorService from './service';
import AuthorController from './controller';
import AuthorRouter from './router';

const router = Router();
const AuthorDao = Author.init(db.sequelize, DataTypes);
const AuthorRepository = new AuthorRepository(AuthorDao);
const AuthorService = new AuthorService(AuthorRepository);
const AuthorController = new AuthorController({AuthorService});
const AuthorRouter = new AuthorRouter({router,AuthorController});

export {AuthorService, AuthorDao};

export default AuthorRouter;