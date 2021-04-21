import {QueryTypes} from 'sequelize'; 

class AuthorRepository {

    constructor(authorDAO) {
        this.authorDAO = authorDAO;
    }

    async getAll() {
        return await this.authorDAO.findAll();
    }

    async save(newAuthor) {
        return await this.authorDAO.create(newAuthor);
    }

    async getById(authorId) {
        return await this.authorDAO.findOne({where: { id: authorId }});
    }    
}

export default AuthorRepository;