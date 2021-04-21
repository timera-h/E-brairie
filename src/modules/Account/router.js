class AccountRouter {

    constructor({router, auth, accountController}) {
        this.router = router;
        this.initializeRoutes({auth, accountController});
        return this.router;
    }

    initializeRoutes({auth, accountController}) {
        this.router.route('/accounts')
            .get(auth.authenticate, accountController.getAll)
            .post(accountController.register);

        this.router.route('/accounts/authenticate').post(accountController.login);
    }
}

export default AccountRouter;