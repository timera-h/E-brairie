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
        // const query = "SELECT * FROM `Ressource` WHERE ";
        // let arrayQuery = [];
        // if( params.title !== null || params.title !== "") {
        //     arrayQuery.push("title: " + params.title); 
        // }
        // if( params.category !== null || params.category !== "") {
        //     arrayQuery.push("category: " + params.category);
        // }
        // if( params.isBorrowed !== null || params.isBorrowed !== "") {
        //     arrayQuery.push("is_borrowed: " + params.isBorrowed);
        // }
        // if( params.serie !== null || params.serie !== "") {
        //     arrayQuery.push("serie: " + params.serie);
        // }
        // if( params.genre !== null || params.genre !== "") {
        //     arrayQuery.push("genre: " + params.genre);
        // }
        // if( params.tomeNumber !== null || params.tomeNumber !== "") {
        //     arrayQuery.push("tome_number: " + params.tomeNumber);
        // }

        // if(arrayQuery.length > 0) {
        // const queryFields = arrayQuery.join(" AND ");
        // const finalQuery = query + queryFields;
        // return await Sequelize.query(finalQuery, {type: QueryTypes.SELECT});
        // }
    } 
}

export default RessourceService;