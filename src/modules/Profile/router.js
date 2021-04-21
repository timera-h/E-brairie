class ProfileRouter {

    constructor({ router, ProfileController }) {
        this.router = router;
        this.initializeRoutes({ProfileController});
        return this.router;
    }

    initializeRoutes({ ProfileController }) {
        this.router.route('/Profiles')
            .get(ProfileController.getAll);
            this.router.route('/Profile/:id')            
            .get(ProfileController.getById);    

        this.router.route('/Profile')
            .post(ProfileController.save);
    }
}

export default ProfileRouter;