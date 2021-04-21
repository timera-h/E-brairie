class ProfileRouter {

    constructor({router, profileController}) {
        this.router = router;
        this.initializeRoutes({profileController});
        return this.router;
    }

    initializeRoutes({profileController}) {
        this.router.route('/Profiles')
            .get(profileController.getAll);
            this.router.route('/Profile/:id')            
            .get(profileController.getById);    

        this.router.route('/Profile')
            .post(profileController.save);
    }
}

export default ProfileRouter;