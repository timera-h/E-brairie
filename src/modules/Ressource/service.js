class RessourceService {

    constructor(ressourceRepository) {
        this.ressourceRepository = ressourceRepository;
    }

    async getAll() {
        return await this.ressourceRepository.getAll();
    }

    async save(newRessource) {
        return await this.ressourceRepository.save(newRessource);
    }

    async getById(ressourceId) {
        return await this.ressourceRepository.getById(ressourceId);
    }

}

export default RessourceService;