class RessourceController {

    constructor({ ressourceService }) {
        this.ressourceService = ressourceService;
    }

    getAll = async (req, res) => {
        try {
            let ressources = await this.ressourceService.getAll();
            res.status(200).json(ressources);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    getByFilters = async (req, res) => {
        const params = req.query
        console.log(params)
        try {
            let ressources = await this.ressourceService.getByFilters(params);
            res.status(200).json(ressources);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    save = async (req, res) => {
        const ressource = req.body
        const lastName = req.params.last_name;
        const firstName = req.params.first_name;
        try {
            await this.ressourceService.save(ressource, lastName, firstName);            
            res.status(201).json('new ressource saved');
        } catch (error) {            
            res.status(400).json(error);
        }
    }

    getById = async (req, res) => {
        const ressourceId = req.params.id;
        try {
            let ressource = await this.ressourceService.getById(ressourceId);
            res.status(200).json(ressource);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    deleteById = async (req, res) => {
        const ressourceId = req.params.id;        
        try {
            await this.ressourceService.deleteById(ressourceId);
            res.status(204).json('delete successful');
        } catch (error) {            
            res.status(400).json(error);
        }
    }

    deleteAllSameRessources = async (req, res) => {    
        const ressource = req.body;
        try {
            await this.ressourceService.deleteAllSameRessources(ressource);
            res.status(204).json('delete successful');
        } catch (error) {
            console.error(error);
            res.status(400).json(error);
        }
    }


}

export default RessourceController;