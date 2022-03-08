fetch("/article.json")
  .then((response) => {
    return response.json();
  })
  .then((articles) => {
    articles.forEach((article) => {
      const articles = document.createElement("article");
      const img = document.createElement("img");
      const h2 = document.createElement("h2");
      const h3 = document.createElement("h3");

      img.src = article.image;
      h2.textContent = article.title;
      h3.textContent = article.author;

      articles.append(img);
      articles.append(h2);
      articles.append(h3);

      document.body.append(articles);
    });
  });
const div = document.createElement("div .window");
document.querySelector("img").addEventListener("mouseover", function () {
  div.textContent = article.description;
});
