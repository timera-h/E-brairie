class ProfileService {

    constructor(ProfileRepository) {
        this.ProfileRepository = ProfileRepository;
    }

    async getAll() {
        return await this.ProfileRepository.getAll();
    }

    async save(newProfile) {
        return await this.ProfileRepository.save(newProfile);
    }

    async getById(ProfileId) {
        return await this.ProfileRepository.getById(ProfileId);
    }

}

export default ProfileService;