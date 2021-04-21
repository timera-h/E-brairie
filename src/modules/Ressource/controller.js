class RessourceController {
    
constructor({ressourceService}) {
    this.ressourceService = ressourceService;     
}

getAll = async (req, res) => {
    try {
        let ressources = await this.ressourceService.getAll();
        res.status(200).json(ressources);
    } catch(error) {
        res.status(400).json(error)
    }
}

save = async (req, res) => {
    const ressource = req.body
    try {
        await this.ressourceService.save(ressource);
        res.status(201).json('new ressource saved');
    } catch(error) {
        res.status(400).json(error);
    }
} 

getById = async (req, res) => {
    const ressourceId = req.params.id;
    try {
        let ressource = await this.ressourceService.getById(ressourceId);
        res.status(200).json(ressource);
    } catch(error) {
        res.status(400).json(error);
    }
} 

}

export default RessourceController;