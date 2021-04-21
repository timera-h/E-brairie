import {Router} from 'express';
import {DataTypes} from 'sequelize';
import db from '../../config/database';

import Borrow from './dao';
import BorrowRepository from './repository';
import BorrowService from './service';
import BorrowController from './controller';
import BorrowRouter from './router';

const router = Router();
const borrowDao = Borrow.init(db.sequelize, DataTypes);
const borrowRepository = new BorrowRepository(borrowDao);
const borrowService = new BorrowService(borrowRepository);
const borrowController = new BorrowController({borrowService});
const borrowRouter = new BorrowRouter({router, borrowController});

export {borrowService, borrowDao};

export default borrowRouter;