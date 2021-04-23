class BorrowService {

    constructor(borrowRepository, profilDao, ressourceDao) {
        this.borrowRepository = borrowRepository;
        this.profilDao = profilDao;
        this.ressourceDao = ressourceDao;
    }

    async getAll() {
        return await this.borrowRepository.getAll();
    }

    async save(ressourceId, accountId) {
        const profile = await this.profilDao.findOne({ where: { id_account: accountId } });
        const ressource = await this.ressourceDao.findOne({ where: { id: ressourceId } });
        console.log(...ressource)
        if (profile.is_warned === true) {
            return "your Account has been warned, you cant borrow anymore";
        } else {
            if (ressource.is_borrow === true) {
                return "sorry that Book is not available anymore";
            }
            const rentDate = new Date();
            const dueDate = rentDate.setMonth(rentDate.getMonth() + 2);
            const borrow = {
                rent_date: rentDate,
                due_date: dueDate,
                is_back_to_library: false,
                is_damaged: false,
                is_past_due: false,
                id_ressource: ressourceId,
                id_profile: profile.id
            }
            console.log(borrow, "borrow");
            await this.borrowRepository.save({ ...borrow });
            return await this.ressourceDao.update({ is_borrowed: true }, { where: { id: ressourceId } });
            // return await this.ressourceDao.create({...ressource, is_borrowed: true });
        }
    }

    async getById(borrowId) {
        return await this.borrowRepository.getById(borrowId);
    }

    async warnProfil(borrow) {
        console.log(borrow);
        const profile = await this.profilDao.findOne({ where: { id: borrow.id_profile } });
        await this.borrowRepository.updateBorrow(borrow);
        return await this.profilDao.update({ is_warned: true }, { where: { id: profile.id } });
    }

}

export default BorrowService;