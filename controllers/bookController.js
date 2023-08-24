const BookModel = require('../models/bookModel')

function cariBookParam(req, res) {
    const result = BookModel.searchBook(req.params.bookTitle, req.params.bookAuthor);
    const title = req.params.bookTitle;
    const author = req.params.bookAuthor;
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

function sortBookParam(req, res) {
    const bookTitle = req.params.bookTitle || null;
    const bookAuthor = req.params.bookAuthor || null;
    const bookYear = parseInt(req.params.bookYear) || null;
    const bookPublisher = req.params.bookPublisher || null;
    const result = BookModel.filterBook(bookTitle, bookAuthor, bookYear, bookPublisher);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

function cariBookQuery(req, res) {
    const result = BookModel.searchBook(req.query.bookTitle, req.query.bookAuthor);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
};

function sortBookQuery(req, res) {
    const bookTitle = req.query.bookTitle || null;
    const bookAuthor = req.query.bookAuthor || null;
    const bookYear = parseInt(req.query.bookYear) || null;
    const bookPublisher = req.query.bookPublisher || null;
    const result = BookModel.filterBook(bookTitle, bookAuthor, bookYear, bookPublisher);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
}

module.exports = {
    cariBookParam,
    sortBookParam,
    cariBookQuery,
    sortBookQuery
}