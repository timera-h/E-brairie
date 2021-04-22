import {Router} from 'express';
import {DataTypes} from 'sequelize';
import db from '../../config/database';
import Author from '../Author/dao';

import Ressource from './dao';
import RessourceRepository from './repository';
import RessourceService from './service';
import RessourceController from './controller';
import RessourceRouter from './router';

const router = Router();
const ressourceDao = Ressource.init(db.sequelize, DataTypes);
const authorDao = Author.init(db.sequelize, DataTypes);
const ressourceRepository = new RessourceRepository(ressourceDao);
const ressourceService = new RessourceService(ressourceRepository, authorDao);
const ressourceController = new RessourceController({ressourceService});
const ressourceRouter = new RessourceRouter({router, ressourceController});

export {ressourceService, ressourceDao};

export default ressourceRouter;