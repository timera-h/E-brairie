class AccountController {

    constructor({accountService, mailer, jwt, bcrypt}) {
        this.accountService = accountService;
        this.jwt = jwt;
        this.mailer = mailer;
        this.bcrypt = bcrypt;
    }

    getAll = async (req, res) => {
        try {

            let accounts = await this.accountService.getAll();
            res.status(200).json(accounts);

        } catch (err) {
            res.status(400).json(err);
        }
    }
    
    register = async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;        
        try {

            if (!email || !password)
                res.status(400).json("missing parameters")
            else {
                const salt = this.bcrypt.genSaltSync(10);
                const hash = this.bcrypt.hashSync(password, salt);

                let account = await this.accountService.register({email, password: hash, is_admin: false});
                await this.mailer.sendMail(account.dataValues);

                res.status(201).json("new account registered");
            }

        }
        catch (err) {
            res.status(400).json('erreur server');
        }
    }

    login = async (req, res) => {
        let accountData = { email: (req.body.email) ? req.body.email : '' }
        let password = (req.body.password) ? req.body.password : '';
        try {

            let account = await this.accountService.getByMail(accountData.email);

            if (!account)
                return res.status(400).json('User not found');

            let checkPassword = await this.bcrypt.compareSync(password, account.password);

            if (checkPassword) {
                let token = await this.jwt.generateToken({ id: account.id });
                return res.status(200).json(token);
            }
            else
                return res.status(400).json('Invalid Password');
            
        } catch (err) {
            res.status(400).json(err);
        }
    }
}

export default AccountController;