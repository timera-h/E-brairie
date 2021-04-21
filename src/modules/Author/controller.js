class AuthorController {

    constructor({ authorService }) {
        this.authorService = authorService;
    }

    getAll = async (req, res) => {
        try {
            let authors = await this.authorService.getAll();
            res.status(200).json(authors);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    save = async (req, res) => {
        const author = req.body;
        try {
            const authorCheck = await this.authorService.getByNames(author.first_name, author.last_name)
            if (authorCheck) {
                res.status(400).json({ message: 'this author already exists' });
            } else {
                await this.authorService.save(author);
                res.status(201).json('new author saved');
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    getById = async (req, res) => {
        const authorId = req.params.id;
        try {
            let author = await this.authorService.getById(authorId);
            res.status(200).json(author);
        } catch (error) {
            res.status(400).json(error);
        }
    }

}

export default AuthorController;