//const books = require("./../models/books");
const bookModel = require("./../models/books");

const getBookList = async (req, res) => {
  let data = [];
  let books = [];
  try {
    data = await bookModel.find();
    console.log(data);
    data.forEach((book) => {
      books.push({ name: book.name, author: book.author, genre: book.genre, id: book._id });
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("bookList", { books: books });
  }
};

const getBook = (req, res) => {
  res.render("addBooks");
};

const postBook = (req, res) => {
  const data = new bookModel({
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect("/books");
    });
};

const deleteBook = async (req, res) => {
  const b_id = req.params.id;
  console.log(b_id)
  const book = await bookModel.findByIdAndDelete(b_id)
  book.delete();
  res.json(book)
}

const updateBook = async (req, res) => {
  const b_name = req.params.name;
  const b_author = req.params.author;
  const b_genre = req.params.genre;
  const b_id = req.params.id;
  //console.log(b_id)
  
  //res.redirect(`/updatebookInfo/${b_id}`)
  res.render("updateBookList", {name: b_name, author: b_author, genre: b_genre, id: b_id})
  
}

const updateBookInfo = async (req, res) => {
  console.log(req.params.id)
  console.log(req.params.name)
  console.log(req.params.author)
  console.log(req.params.genre)
  const book = await bookModel.findByIdAndUpdate(req.params.id,{
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
  },
  {new: true})
  res.redirect("/book-list")
}

module.exports = { getBookList, getBook, postBook, deleteBook, updateBook, updateBookInfo };
