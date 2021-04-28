class RessourceRouter {

    constructor({ router, ressourceController }) {
        this.router = router;
        this.initializeRoutes({ ressourceController });
        return this.router;
    }

    initializeRoutes({ ressourceController }) {
        this.router.route('/ressources')
            .get(ressourceController.getAll);

        this.router.route('/ressources/filters')
            .get(ressourceController.getByFilters);

        this.router.route('/ressource/:id')
            .get(ressourceController.getById);

        this.router.route('/ressource/:first_name/:last_name')
            .post(ressourceController.save);

        this.router.route('/ressource/:id/')
            .delete(ressourceController.deleteById);

        this.router.route('/ressources')
            .delete(ressourceController.deleteAllSameRessources);

    }
}

export default RessourceRouter;