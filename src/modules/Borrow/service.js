class BorrowService {

    constructor(borrowRepository) {
        this.borrowRepository = borrowRepository;
    }

    async getAll() {
        return await this.borrowRepository.getAll();
    }

    async save(newBorrow) {
        return await this.borrowRepository.save(newBorrow);
    }

    async getById(borrowId) {
        return await this.borrowRepository.getById(borrowId);
    }

}

export default BorrowService;