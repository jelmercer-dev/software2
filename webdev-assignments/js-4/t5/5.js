const picArray = [
  {
    title: "1",
    image: { medium: " " },
    caption: "AAAAAA",
    description: "aaaaaa",
  },
  {
    title: "2",
    image: { medium: " " },
    caption: "BBBBB",
    description: "bbbbb",
  },
  {
    title: "3",
    image: { medium: " " },
    caption: "CCCC",
    description: "cccc",
  },
];



for (let i = 0; i < picArray.length; i++) {
  const picture = picArray[i];
  const article = document.createElement("article");
  article.classList.add("card");

  const heading = document.createElement("h2");
  heading.innerText = picture.title;
  article.appendChild(heading);

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.src = picture.image.medium;
  image.alt = picture.title;
  figure.appendChild(image);

  const caption = document.createElement("figcaption");
  caption.innerHTML = picture.caption;
  figure.appendChild(caption);
  article.appendChild(figure);

  const description = document.createElement("p");
  description.innerHTML = picture.description;
  article.appendChild(description);

  document.querySelectorAll("section")[0].appendChild(article);
}