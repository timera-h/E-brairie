class BorrowController {
    
constructor({borrowService}) {
    this.borrowService = borrowService;     
}

getAll = async (req, res) => {
    try {
        let borrows = await this.borrowService.getAll();
        res.status(200).json(borrows);
    } catch(error) {
        res.status(400).json(error)
    }
}

save = async (req, res) => {
    const borrow = req.body
    try {
        await this.borrowService.save(borrow);
        res.status(201).json('new borrow saved');
    } catch(error) {
        res.status(400).json(error);
    }
} 

getById = async (req, res) => {
    const borrowId = req.params.id;
    try {
        let borrow = await this.borrowService.getById(borrowId);
        res.status(200).json(borrow);
    } catch(error) {
        res.status(400).json(error);
    }
} 

}

export default BorrowController;