const express = require('express');
const bookController = require('./controllers/bookController')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/search-book-param/:bookTitle.:bookAuthor', bookController.cariBookParam);
app.get('/filter-book-param/:bookAuthor?.:bookYear?.:bookPublisher?.:bookTitle?', bookController.sortBookParam);

app.get('/search-book-query/', bookController.cariBookQuery);
app.get('/filter-book-query/', bookController.sortBookQuery);



app.listen(port, () => {
    console.log(`Bookstore MVC API running at http://localhost:${port}`);
});