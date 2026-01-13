// ? DOM - [DOCUMENT OBJECT MODEL] - 
// * The Document Object Model (DOM) in JavaScript is a programming interface for web documents. 
// * It represents the structure of a document as a tree of objects, making it possible to manipulate the document's content, structure, and style dynamically. 
// * The DOM provides a way for programs and scripts to access and update the content, structure, and style of documents, usually HTML or XML documents.

// DOM IS INDEPENDENT OF LANGUAGE.

// document.getElementById("fpara");

// * Update methos 
    // text content - print all things which are mentioned in html document as it is.

    // inner text - print only thing which is available on ui

    // outer html - 
    // inner html - html tag k inside me jo html h usse set ya get kar skta hu.

// * CREATE ELEMENT
    // add element 
    // .createElement
    
// * Insert element 
    // append child - element sbse last me add hoga

    // q. how to find parent using child
// code

// let Mydiv = document.querySelector('.box');

// let newelement = document.createElement('h1');

// newelement.textContent = "My NAme Is Punit";

// Mydiv.insertAdjacentElement('afterbegin', newelement);

// Removing Child

let parent = document.querySelector('.box');
let child = document.querySelector('.Hello');

parent.removeChild(child);

// Print style 
    console.log(parent.style);

// Settin attribute
    Element.setattribute(name, value);

// getattribute
// removeattribute