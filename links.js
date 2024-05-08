function insertCommonLinks() {
  // Create the container element for the links
  const linkContainer = document.createElement("nav");
  linkContainer.classList.add("common-links"); // Add a class for styling

  // Define the links as an object with link text and URL
  const links = [
    { text: "Dima's Page", url: "https://sirni4ek.github.io/" },
    { text: "Danya's Page", url: "https://danil357345.github.io/" },
    { text: "Solomiia's Page", url: "https://solomiia2098.github.io/" },
    { text: "Ilya's Page", url: "https://gulkily.github.io/" }
  ];

  // Loop through the links object and create anchor elements
  for (const link of links) {
    const linkElement = document.createElement("a");
    linkElement.textContent = link.text;
    linkElement.href = link.url;
    linkContainer.appendChild(linkElement);
  }

  // Get the body element
  const body = document.body;

  // Append the container element with links to the body
  body.appendChild(linkContainer);
}

// Call the function to insert links
insertCommonLinks();
