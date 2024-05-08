function insertCommonLinks() {
  // Create the container element for the links
  const linkContainer = document.createElement("nav");
  linkContainer.classList.add("common-links"); // Add a class for styling

  // Define the links as an array of objects with link text and URL
  const links = [
    { text: "Dima's Page", url: "https://sirni4ek.github.io/" },
    { text: "Danya's Page", url: "https://danil357345.github.io/" },
    { text: "Solomiia's Page", url: "https://solomiia2098.github.io/" },
    { text: "Ilya's Page", url: "https://gulkily.github.io/" },
  ];

  // Loop through the links array and create anchor elements
  for (let i = 0; i < links.length; i++) {
    const link = document.createElement("a");
    link.textContent = links[i].text;
    link.href = links[i].url;
    linkContainer.appendChild(link);
  }

  // Get the body element
  const body = document.body;

  // Append the container element with links to the body
  body.appendChild(linkContainer);
}

// Call the function to insert links
insertCommonLinks();
