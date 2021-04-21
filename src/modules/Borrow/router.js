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
            .get(borrowController.getById);

        this.router.route('/borrow')
            .post(borrowController.save);
    }
}

export default BorrowRouter;