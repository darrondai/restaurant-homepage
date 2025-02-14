export function menuPageSetup() {
  const contentDiv = document.querySelector("div#content");
  // clear contentDiv
  contentDiv.textContent = "";
  // menu header
  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "MENU HEADER";
  contentDiv.append(menuHeader);
  // menuItemList
  const menuItemList = document.createElement("ul");
  contentDiv.append(menuItemList);
  // menuItems
  // each item has a img, name, price, ingredients
  const menuItem = document.createElement("li");
  menuItem.textContent = "THIS IS A MENU ITEM (CHICKEN PARM)";
  menuItemList.appendChild(menuItem);
}
