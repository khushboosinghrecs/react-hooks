//book store add book, boooktitle,
//read, unread, editTitle, deleteBook

import { useEffect, useState } from "react";

export const Book = () => {
  const [book, setBook] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [isBookRead, setisBookRead] = useState(false);

  const addBook = (e) => {
    e.preventDefault();
    let allBooks = [...book];
    allBooks.push(inputVal);
    setBook(allBooks);
    setInputVal("");
  };
  const deleteBook = (book, i) => {
    let deletedBook = [...book].filter((bookVal, index) => index !== i);
    setBook(deleteBook);
  };
  const checkBookStatus = (book, i) => {};
  return (
    <div className="book">
      <form onSubmit={(e) => addBook(e)}>
        <input type="text" onChange={(e) => setInputVal(e.target.value)} />
        <button>Add Book</button>
      </form>
      {book && book.length > 0 && (
        <div>
          {book.map((bookName, i) => (
            <>
              <p onClick={checkBookStatus(book, i)}>bookName</p>
              <button>read</button>
              <button> unread </button>
              <button onClick={deleteBook(book, i)}>delete Book </button>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
