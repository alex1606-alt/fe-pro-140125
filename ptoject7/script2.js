
const elementsArray = [
    {tag: "p",
    text: "Element1"},
    {tag: "div",
        text: "Element2"},
        {tag: "span",
            text: "Element3"},

];
const container = document.getElementById("container");

elementsArray.forEach(element => {
    const newElement = document.createElement(element.tag); 
    newElement.textContent = element.text; 
    container.appendChild(newElement); 
});

