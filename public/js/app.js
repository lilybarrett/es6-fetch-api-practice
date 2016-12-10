fetch('http://localhost:4567/books.json')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
      throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      body.books.forEach((book) => {
        $('#books').append(`<li>${book.name}</li>`);
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
