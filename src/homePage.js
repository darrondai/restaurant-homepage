// initial page-layout setup module
import restaurantImg from "./assets/restaurant.jpg";

export function homePageSetup() {
  const contentDiv = document.querySelector("div#content");

  const img = document.createElement("img");
  img.src = restaurantImg;
  contentDiv.appendChild(img);

  const headline = document.createElement("h1");
  headline.textContent = "Welcome to our Fancy Restaurant!";
  contentDiv.appendChild(headline);

  const description = document.createElement("p");
  description.textContent = "blah blah blah this is description text";
  contentDiv.appendChild(description);
}
