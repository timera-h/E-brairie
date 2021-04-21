class ProfileController {
    
constructor({profileService}) {
    this.profileService = profileService;     
}

getAll = async (req, res) => {
    try {
        let profiles = await this.profileService.getAll();
        res.status(200).json(profiles);
    } catch(error) {
        res.status(400).json(error)
    }
}

save = async (req, res) => {
    const profile = req.body.profile
    try {
        this.profileService.save(profile);
        res.status(201).json('new profile saved');
    } catch(error) {
        res.status(400).json(error);
    }
} 

getById = async (req, res) => {
    const profileId = req.params.id;
    try {
        let profile = this.profileService.getByid(profileId);
        res.status(201).json(profile);
    } catch(error) {
        res.status(400).json(error);
    }
} 

}

export default ProfileController;