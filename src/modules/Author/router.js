class AuthorRouter {
    constructor({ router, authorController }) {
        this.router = router;
        this.initializeRoutes({authorController });
        return this.router;
    }

    initializeRoutes({ authorController }) {
        this.router.route('/authors')
            .get(authorController.getAll)
            .get(authorController.getById);

        this.router.route('/authors/save')
            .post(authorController.save);
    }
}

export default AuthorRouter;