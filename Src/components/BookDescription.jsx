import React from 'react';

class BookDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      id: '',
      title: '',
      description: '',
      coverImage: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAddBook = () => {
    const { id, title, description, coverImage } = this.state;
    const newBook = { id, title, description, coverImage };
    const updatedBooks = [...this.state.books, newBook];
    this.setState({ books: updatedBooks });
  }

  handleDeleteBook = (bookId) => {
    const updatedBooks = this.state.books.filter(book => book.id !== bookId);
    this.setState({ books: updatedBooks });
  }

  render() {
    const { books, id, title, description, coverImage } = this.state;

    return (
      <div>
        <h2>Book Description</h2>

        <input
          type="text"
          name="id"
          value={id}
          placeholder="ID"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Title"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Description"
          onChange={this.handleInputChange}
        />
        <input
          type="text"
          name="coverImage"
          value={coverImage}
          placeholder="Cover Image URL"
          onChange={this.handleInputChange}
        />

        <button onClick={this.handleAddBook}>Add Book</button>

        <ul>
          {books.map(book => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.description}</p>
              <img src={book.coverImage} alt={book.title} />
              <button onClick={() => this.handleDeleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BookDescription;