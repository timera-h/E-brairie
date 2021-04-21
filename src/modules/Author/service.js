class AuthorService {

    constructor(authorRepository) {
        this.authorRepository = authorRepository;
    }

    async getAll() {
        return await this.authorRepository.getAll();
    }

    async save(newAuthor) {
        return await this.authorRepository.save(newAuthor);
    }

    async getById(authorId) {
        return await this.authorRepository.getById(authorId);
    }

    async getByNames(firstName, lastName) {
        return await this.authorRepository.getByNames(firstName, lastName);
    }

}

export default AuthorService;