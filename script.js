fetch('https://fenglish.ru/wp-content/uploads/2014/06/carnegi.jpg')
  .then(response => {
    return response.json();
  })
  .then(articles => {
    articles.forEach(article => {
      const article = document.createElement('article');
      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');
      // const span = document.createElement('span');
      
      img.src = article.img;
      h2.textContent = article.h2;
      h3.textContent = article.h3;


    });
  })

