import React from 'react';

const Book = ({ match }) => (
  <div>
  <h3>Book with ID {match.params.id}</h3>
  </div>
);

export default Book;
