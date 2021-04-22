import {Router} from 'express';
import {DataTypes} from 'sequelize';
import db from '../../config/database';


import Author from './dao';
import AuthorRepository from './repository';
import AuthorService from './service';
import AuthorController from './controller';
import AuthorRouter from './router';

const router = Router();
const authorDao = Author.init(db.sequelize, DataTypes);
const authorRepository = new AuthorRepository(authorDao);
const authorService = new AuthorService(authorRepository);
const authorController = new AuthorController({authorService});
const authorRouter = new AuthorRouter({router, authorController});

export {authorService, authorDao};

export default authorRouter;