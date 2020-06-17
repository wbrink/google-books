export default {
  getBook : (title) => {
    return fetch("/api/get/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({search: title})
    });

  },

  saveBook : (id, title, authors, description, image, link) => {
    return fetch("/api/save", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {
          id: id,
          title: title, 
          authors: authors, 
          description: description, 
          image: image, 
          link: link
        }
      )
    });
  },

  getSavedBooks: () => {
    return fetch("/api/getSavedBooks")
  },

  deleteBook: (id) => {
    return fetch("/api/deleteBook", {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({id: id})
    })
  }
}