class BorrowRouter {

    constructor({ router, borrowController }) {
        this.router = router;
        this.initializeRoutes({ borrowController });
        return this.router;
    }

    initializeRoutes({ borrowController }) {
        this.router.route('/borrows')
            .get(borrowController.getAll);

        this.router.route('/borrow/:id')
            .get(borrowController.getById)

        this.router.route('/borrow/:accountId/:ressourceId')
            .post(borrowController.save);

        this.router.route('/borrow')
            .patch(borrowController.warnProfil);

        this.router.route('/borrow/test/:id')
            .get(borrowController.getById)


    }
}

export default BorrowRouter;