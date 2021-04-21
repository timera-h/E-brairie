class AccountRepository {

    constructor(accountDAO) {
        this.accountDAO = accountDAO;
    }

    async getAll() {
        return await this.accountDAO.findAll();
    }

    async register(accountData) {
        return await this.accountDAO.create(accountData);
    }

    async getByMail(mail) {
        return await this.accountDAO.findOne({where: {email: mail}});
    }


}

export default AccountRepository;