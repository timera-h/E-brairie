import {QueryTypes} from 'sequelize'; 

class BorrowRepository {

    constructor(borrowDAO) {
        this.borrowDAO = borrowDAO;
    }

    async getAll() {
        return await this.borrowDAO.findAll();
    }

    async save(newBorrow) {
        return await this.borrowDAO.create(newBorrow);
    }

    async getById(borrowId) {
        return await this.borrowDAO.findOne({where: { id: borrowId }});
    }    
}

export default BorrowRepository;