function fetchApi() {
  const url = "https://dog.ceo/api/breeds/image/random";
  fetch(url)
    .then(() => console.log("fetch completed"))
    .catch(() => console.error("fetch failed"));
}
