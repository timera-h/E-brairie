
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

    //include with alias af table declared in dao
    //doesnt work cause relation is onesided here we can get all the borrow from the ressource not the opposit
    async getWithRessourceById(borrowId) {
        return await this.borrowDAO.findOne({where: { id: borrowId }, include: 'Ressource'});
    }
        
    async updateBorrow(borrow) {
        console.log(borrow);
        return await this.borrowDAO.update({is_damaged: true, is_past_due: false }, {where: {id: borrow.id}})
    }
}

export default BorrowRepository;