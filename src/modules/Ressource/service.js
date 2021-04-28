class RessourceService {

    constructor(ressourceRepository, authorDao) {
        this.ressourceRepository = ressourceRepository;
        this.authorDao = authorDao;
    }

    async getAll() {
        return await this.ressourceRepository.getAll();
    }

    async save(newRessource, lastName, firstName) {
        //the author has to be in database first
        const author = await this.authorDao.findOne({ where: { first_name: firstName, last_name: lastName } });
        console.log(author);
        //book will be saved with a default quantity of one, check the rest of the logic to understand         
        //check if some same book(s) already exist(s) in stock 
        const sameBookInStock = await this.ressourceRepository.getByMainPropsAndAuthorId(newRessource.title, newRessource.serie, newRessource.tome_number, newRessource.genre, author.id);
        //if it does: update this book quantity with + 1 on every row it could be found within the database, we consider a ressource to be a unique book not a set of few
        // so if the book is damaged during a borrow we warn the user
        //he wont be able to borrow anymore on his account.
        if (sameBookInStock) {
            const updatedQuantity = sameBookInStock.quantity + 1;
            await this.ressourceRepository.updateQuantity(updatedQuantity, newRessource.title, newRessource.serie, newRessource.tome_number, newRessource.genre, author.id);
            newRessource.quantity = updatedQuantity;
        }
        return await this.ressourceRepository.save({ ...newRessource, id_author: author.id });;
    }

    async getById(ressourceId) {
        return await this.ressourceRepository.getById(ressourceId);
    }

    async getByFilters(reqQuery) {
        return await this.ressourceRepository.getByFilters(reqQuery);
    }

    async deleteById(ressourceToDeleteId) {
        //first we refetch the book before delete to make sure to get the most recent quantity before proceeding the remaining logic
        //always keep in mind that 2 admins can use the app at the same time if we just trust the fact that what is sent by the front is up to date
        //we might encounter data issues, we just cant simply send the quantity from the front we have to get it to be accurate
        const bookToDelete = await this.ressourceRepository.getById(ressourceToDeleteId);
        const quantity = bookToDelete.quantity;
        const deleted = await this.ressourceRepository.deleteBookById(ressourceToDeleteId);
        //if we have more books like this one in stock we update their quantity with - 1 on every row they could be found within the database        
        if (quantity > 1)
            await this.ressourceRepository.updateQuantity(quantity - 1, bookToDelete.title, bookToDelete.serie, bookToDelete.tome_number, bookToDelete.genre, bookToDelete.id_author);

        return deleted;
    }

    async deleteAllSameRessources(ressourceToDelete) {
        //we remove some props from the ressource the front gave to us
        //to send it with a spread operator inside a where close within a .destroy sequelize method within the repo   
        delete ressourceToDelete.id;
        delete ressourceToDelete.is_borrowed;
        delete ressourceToDelete.row;
        delete ressourceToDelete.column;
        return await this.ressourceRepository.deleteAllSameBook(ressourceToDelete);
    }
}

export default RessourceService;