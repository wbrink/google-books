export default {
  getBook : (title) => {
    return fetch("/api/get/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({search: title})
    });
  }
}