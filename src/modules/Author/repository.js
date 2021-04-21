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
    
    async getByNames(firstName, lastName) {
        return await this.authorDAO.findOne({where: { first_name: firstName, last_name: lastName}});
    }
}

export default AuthorRepository;