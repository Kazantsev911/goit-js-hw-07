const categoriesList = document.querySelector("#categories");

const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach((item) => {
  const category = item.querySelector("h2").textContent;

  const categoryItems = item.querySelectorAll("li").length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${categoryItems}`);
});
