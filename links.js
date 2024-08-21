function insertCommonLinks() {
  const linkContainer = document.createElement("nav");
  linkContainer.classList.add("common-links"); 

  const links = [
    { text: "Dima's Page", url: "https://sirni4ek.github.io/" },
    { text: "Danya's Page", url: "https://danil357345.github.io/" },
    { text: "Solomiia's Page", url: "https://solomiia2098.github.io/" },
    { text: "Ilya's Page", url: "https://gulkily.github.io/" },
    { text: "Terminology", url: "terminology.html" },  
    { text: "Commands", url: "commands.html" },        
    { text: "FizzBuzz", url: "fizzbuzz.html" },        
    { text: "Sweden", url: "sweden.html" }             
  ];

  
  for (const link of links) {
    const linkElement = document.createElement("a");
    linkElement.textContent = link.text;
    linkElement.href = link.url;
    linkElement.style.marginRight = "10px"; 
    linkContainer.appendChild(linkElement);
  }

  
  const body = document.body;

 
  body.appendChild(linkContainer);
}


insertCommonLinks();
