const axios = require('axios');

// Base URL of the running Express Book Review application.
const BASE_URL = process.env.BOOK_REVIEW_API_URL || 'http://localhost:5000';

// Retrieve all books from the application.
async function getAllBooks() {
  const response = await axios.get(`${BASE_URL}/books`);
  return response.data;
}

// Retrieve a book by its ISBN.
async function getBooksByISBN(isbn) {
  if (!isbn) throw new Error('ISBN is required');
  const response = await axios.get(
    `${BASE_URL}/books/isbn/${encodeURIComponent(isbn)}`
  );
  return response.data;
}

// Retrieve books matching an author name.
async function getBooksByAuthor(author) {
  if (!author) throw new Error('Author is required');
  const response = await axios.get(
    `${BASE_URL}/books/author/${encodeURIComponent(author)}`
  );
  return response.data;
}

// Retrieve books matching a title.
async function getBooksByTitle(title) {
  if (!title) throw new Error('Title is required');
  const response = await axios.get(
    `${BASE_URL}/books/title/${encodeURIComponent(title)}`
  );
  return response.data;
}

module.exports = {
  getAllBooks,
  getBooksByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};
