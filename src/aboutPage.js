export function aboutPageSetup() {
  const contentDiv = document.querySelector("div#content");
  // clear contentDiv
  contentDiv.textContent = "";
  // about header
  const aboutHeader = document.createElement("h1");
  aboutHeader.textContent =
    "This is the about header! Use this space to talk about the history of the restaurant!!!";
  contentDiv.appendChild(aboutHeader);

  // mission statement
  const missionStatement = document.createElement("p");
  missionStatement.textContent = "MISSION STATEMENT";
  contentDiv.appendChild(missionStatement);

  // our team
  const ourTeam = document.createElement("p");
  ourTeam.textContent = "OUR TEAM";
  contentDiv.appendChild(ourTeam);
  // profile pic, name, position
}
