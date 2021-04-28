import { QueryTypes } from 'sequelize';

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
        return await this.ressourceDAO.findOne({ where: { id: ressourceId } });
    }

    async getByMainPropsAndAuthorId(title, serie, tomeNumber, genre, idAuthor) {
        return await this.ressourceDAO.findOne({ where: { title: title, serie: serie, tome_number: tomeNumber, genre: genre, id_author: idAuthor } });
    }

    async updateQuantity(quantity, title, serie, tomeNumber, genre, idAuthor) {
        return await this.ressourceDAO.update({ quantity: quantity }, { where: { title: title, serie: serie, tome_number: tomeNumber, genre: genre, id_author: idAuthor } });
    }

    async getByFilters(reqQuery) {
        return await this.ressourceDAO.findAll({ where: { ...reqQuery } });
    }

    async deleteBookById(ressourceId) {
        return await this.ressourceDAO.destroy({ where: { id: ressourceId } });
    }

    async deleteAllSameBook(ressource) {
        return await this.ressourceDAO.destroy({ where: { ...ressource } });
    }

}

export default RessourceRepository;