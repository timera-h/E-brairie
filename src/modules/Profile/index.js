import {Router} from 'express';
import {DataTypes} from 'sequelize';
import db from '../../config/database';

import Profile from './dao';
import ProfileRepository from './repository';
import ProfileService from './service';
import ProfileController from './controller';
import ProfileRouter from './router';

const router = Router();
const profileDao = Profile.init(db.sequelize, DataTypes);
const profileRepository = new ProfileRepository(profileDao);
const profileService = new ProfileService(profileRepository);
const profileController = new ProfileController({profileService});
const profileRouter = new ProfileRouter({router, profileController});

export {profileService, profileDao};

export default profileRouter;