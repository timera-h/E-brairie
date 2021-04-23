import {Router} from 'express';
import {DataTypes} from 'sequelize';
import db from '../../config/database';
import Profile from '../Profile/dao';
import Ressource from '../Ressource/dao';

import Borrow from './dao';
import BorrowRepository from './repository';
import BorrowService from './service';
import BorrowController from './controller';
import BorrowRouter from './router';

const router = Router();
const profilDao = Profile.init(db.sequelize, DataTypes);
const ressourceDao = Ressource.init(db.sequelize, DataTypes);
const borrowDao = Borrow.init(db.sequelize, DataTypes);
const borrowRepository = new BorrowRepository(borrowDao);
const borrowService = new BorrowService(borrowRepository, profilDao, ressourceDao);
const borrowController = new BorrowController({borrowService});
const borrowRouter = new BorrowRouter({router, borrowController});

export {borrowService, borrowDao};

export default borrowRouter;