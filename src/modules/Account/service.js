class AccountService {

    constructor(accountRepo, bcrypt) {
        this.accountRepo = accountRepo;
        this.bcrypt = bcrypt;
    }

    async getAll() {
        return await this.accountRepo.getAll();
    }

    async register(email, password) {
        const salt = this.bcrypt.genSaltSync(10);
        const hash = this.bcrypt.hashSync(password, salt);
        return await this.accountRepo.register({email, password: hash, is_admin: false});        
        
    }
    
    async getByMail(mail) {
        return await this.accountRepo.getByMail(mail);
    }

     
}

export default AccountService;
