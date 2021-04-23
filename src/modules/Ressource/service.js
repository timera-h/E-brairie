import {QueryTypes, Sequelize} from 'sequelize'; 
class RessourceService {

    constructor(ressourceRepository, authorDao) {
        this.ressourceRepository = ressourceRepository;
        this.authorDao = authorDao;
    }

    async getAll() {
        return await this.ressourceRepository.getAll();
    }

    async save(newRessource, lastName, firstName) {  
        const author = await this.authorDao.findOne({where: {first_name: firstName, last_name: lastName}});        
        return await this.ressourceRepository.save({...newRessource, id_author: author.id});
    }

    async getById(ressourceId) {
        return await this.ressourceRepository.getById(ressourceId);
    }

    async getByFilters(reqQuery) {
        return await this.ressourceRepository.getByFilters(reqQuery);      
    } 
}

export default RessourceService;