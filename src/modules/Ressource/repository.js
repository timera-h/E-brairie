import {QueryTypes} from 'sequelize'; 

class RessourceRepository {

    constructor(ressourceDAO) {
        this.ressourceDAO = ressourceDAO;
    }

    async getAll() {
        return await this.ressourceDAO.findAll();
    }

    async save(newRessource) {
        return await this.ressourceDAO.create(newRessource);
    }

    async getById(ressourceId) {
        return await this.ressourceDAO.findOne({where: { id: ressourceId }});
    } 
    
    
}

export default RessourceRepository;