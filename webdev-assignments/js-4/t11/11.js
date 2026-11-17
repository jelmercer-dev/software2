const picArray = [
  {
    title: "1",
    image: {
      medium: " ",
        large: " ",
    },
    caption: "AAAAAA",
    description: "aaaaaa",
  },
  {
    title: "2",
    image: {
      medium: " ",
      large: " ",
    },
    caption: "BBBBB",
    description: "bbbbb",
  },
  {
    title: "3",
    image: {
      medium: " ",
      large: " ",
    },
    caption: "CCCC",
    description: "cccc",
  },
];

const section = document.querySelector("section");
const dialog = document.querySelector("dialog");
const dialogImage = dialog.querySelector("img");
const closeButton = dialog.querySelector("span");

for (let i = 0; i < picArray.length; i++) {
  const picture = picArray[i];
  const article = document.createElement("article");
  article.classList.add("card");

  const heading = document.createElement("h2");
  heading.textContent = picture.title;
  article.appendChild(heading);

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.src = picture.image.medium;
  image.alt = picture.title;
  figure.appendChild(image);

  const caption = document.createElement("figcaption");
  caption.textContent = picture.caption;
  figure.appendChild(caption);
  article.appendChild(figure);

  const description = document.createElement("p");
  description.textContent = picture.description;
  article.appendChild(description);

  article.addEventListener("click", () => {
    dialogImage.src = picture.image.large;
    dialogImage.alt = picture.title;
    dialog.showModal();
  });

  section.appendChild(article);
}

closeButton.addEventListener("click", () => {
  dialog.close();
});