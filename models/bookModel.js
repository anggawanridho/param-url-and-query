let books = [
    { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata', publicationYear: 2005, publisher: 'Bentang Pustaka' },
    { id: 2, title: 'Tenggelamnya Kapal Van der Wijck', author: 'Hamka', publicationYear: 1938, publisher: 'Pustaka Rakjat' },
    { id: 3, title: 'Bumi Manusia', author: 'Pramoedya Ananta Toer', publicationYear: 1980, publisher: 'Hasta Mitra' },
    { id: 4, title: 'Pulang', author: 'Leila S. Chudori', publicationYear: 2012, publisher: 'Kepustakaan Populer Gramedia' },
    { id: 5, title: 'Cantik itu Luka', author: 'Eka Kurniawan', publicationYear: 2002, publisher: 'Gramedia Pustaka Utama' },
    { id: 6, title: 'Perahu Kertas', author: 'Dee Lestari', publicationYear: 2009, publisher: 'Bentang Pustaka' },
    { id: 7, title: 'Dilan 1990', author: 'Pidi Baiq', publicationYear: 2014, publisher: 'Pastel Books' },
    { id: 8, title: 'Pulang', author: 'Tere Liye', publicationYear: 2008, publisher: 'Republika' },
    { id: 9, title: 'Sang Pemimpi', author: 'Andrea Hirata', publicationYear: 2006, publisher: 'Bentang Pustaka' },
    { id: 10, title: 'Padang Bulan', author: 'Andrea Hirata', publicationYear: 2005, publisher: 'Bentang Pustaka' }
];

function searchBook(bookTitle, bookAuthor) {
    const bookFound = {
        title: bookTitle,
        author: bookAuthor
    }
    return bookFound;
}

function filterBook(bookTitle, bookAuthor, bookYear, bookPublisher) {
    let filteredBooks = books;
    if (bookTitle) {
        filteredBooks = filteredBooks.filter(book => book.title.toLowerCase().includes(bookTitle.toLowerCase()));
    }

    if (bookAuthor) {
        filteredBooks = filteredBooks.filter(book => book.author.toLowerCase().includes(bookAuthor.toLowerCase()));
    }

    if (bookYear) {
        filteredBooks = filteredBooks.filter(book => book.publicationYear === bookYear);
    }

    if (bookPublisher) {
        filteredBooks = filteredBooks.filter(book => book.publisher.toLowerCase().includes(bookPublisher.toLowerCase()));
    }

    return filteredBooks;
}

module.exports = {
    searchBook,
    filterBook
}