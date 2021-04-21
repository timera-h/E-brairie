class AccountService {

    constructor(accountRepo) {
        this.accountRepo = accountRepo;
    }

    async getAll() {
        return await this.accountRepo.getAll();
    }

    async register(accountData) {
        return await this.accountRepo.register(accountData);
    }
    
    async getByMail(mail) {
        return await this.accountRepo.getByMail(mail);
    }
}

export default AccountService;
