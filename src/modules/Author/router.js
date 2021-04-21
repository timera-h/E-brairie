class AuthorRouter {

    constructor({ router, authorController }) {
        this.router = router;
        this.initializeRoutes({authorController});
        return this.router;
    }

    initializeRoutes({ authorController }) {
        this.router.route('/authors')
            .get(authorController.getAll);
            this.router.route('/author/:id')            
            .get(authorController.getById);    

        this.router.route('/author')
            .post(authorController.save);
    }
}

export default AuthorRouter;