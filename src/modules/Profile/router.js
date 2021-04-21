class ProfileRouter {

    constructor({ router, profileController }) {
        this.router = router;
        this.initializeRoutes({profileController});
        return this.router;
    }

    initializeRoutes({ profileController }) {
        this.router.route('/profiles')
            .get(profileController.getAll);
            this.router.route('/profile/:id')            
            .get(profileController.getById);    

        this.router.route('/profile')
            .post(profileController.save);
    }
}

export default ProfileRouter;