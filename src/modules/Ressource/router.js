class RessourceRouter {

    constructor({ router, ressourceController }) {
        this.router = router;
        this.initializeRoutes({ ressourceController });
        return this.router;
    }

    initializeRoutes({ ressourceController }) {
        this.router.route('/ressources')
            .get(ressourceController.getAll);

        this.router.route('/ressource/:id')
            .get(ressourceController.getById);

        this.router.route('/ressource')
            .post(ressourceController.save);
    }
}

export default RessourceRouter;