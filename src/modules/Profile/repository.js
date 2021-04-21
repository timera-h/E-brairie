import {QueryTypes} from 'sequelize'; 

class ProfileRepository {

    constructor(profileDAO) {
        this.profileDAO = profileDAO;
    }

    async getAll() {
        return await this.profileDAO.findAll();
    }

    async save(newProfile) {
        return await this.profileDAO.create(newProfile);
    }

    async getById(profileId) {
        return await this.profileDAO.findByPk(profileId);
    }    
}

export default ProfileRepository;