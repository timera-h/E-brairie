class BorrowController {

    constructor({ borrowService }) {
        this.borrowService = borrowService;
    }

    getAll = async (req, res) => {
        try {
            let borrows = await this.borrowService.getAll();
            res.status(200).json(borrows);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    save = async (req, res) => {
        const accountId = req.params.accountId;
        const ressourceId = req.params.ressourceId;
        if (!accountId || !ressourceId) {
            res.status(404).json('something went wrong sorry');
        } else {
            try {
                const borrowProcess = await this.borrowService.save(ressourceId, accountId);
                if (typeof borrowProcess === String)
                    res.status(400).json(borrowProcess);
                else
                    res.status(201).json('new borrow saved');
            } catch (error) {   
                console.error(error);             
                res.status(500).json(error);
            }
        }
    }

    getById = async (req, res) => {
        const borrowId = req.params.id;
        try {
            let borrow = await this.borrowService.getById(borrowId);
            res.status(200).json(borrow);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    warnProfil = async (req, res) => {
        const borrow = req.body;
        try {
            let warning = await this.borrowService.warnProfil(borrow);

            res.status(200).json(warning);
        } catch (error) {
            console.error(error);
            res.status(400).json(error);
        }
    }

    test = async (req, res) => {
        const borrowId = req.params.id;
        try {
            let borrow = await this.borrowService.testInclude(borrowId);
            res.status(200).json(borrow);
        } catch (error) {
            console.error(error); 
            res.status(400).json(error);
        }
    }

}

export default BorrowController;