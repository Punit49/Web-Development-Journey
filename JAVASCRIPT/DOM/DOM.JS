// ? Document - While Page loads, html document automatically converts into an js object [Named as Document] and this document is available in the window object
// DOM is a way to manipulate HTML using JS.

console.log(window.document); // To print document as HTML
console.dir(window.document); // To print document as properties and methods.
console.dir(document.body.childNodes[1]);

// * Accessing HTML tags using js 
    // console.log(window.document.body.childNodes[1]);

// ? DOM MANIPULATION 
// * 1. Ways to Select HTML Elements

        // * 1. selecting element with id - returns the element as an object or null if not found
            // let byid = document.getElementById("header");
            // console.log(byid);
            // console.dir(byid); for object form

        // * 2. selecting element with class - return html collection which is similar to array, returns an object containing all the elements with the specified class names in the document as objects and empty collection if nothing matches.
            // let byclass = document.getElementsByClassName("c1");
            // console.log(byclass);
            
        // * 3. selecting element with tag name
            // let bytag = document.getElementsByTagName("p");
            // console.log(bytag);
            // console.dir(bytag);
            
        // * 4. Query Selector - selection can be done with id, class and tagaName, returns first found element 
            // let firstelement = document.querySelector("#header");
            // console.log(firstelement);
            // console.dir(firstelement);

        // * 5. Query SelectorAll - returns a nodelist of all matching elements.
            // let allelements = document.querySelectorAll("p");
            // console.log(allelements);
            // console.dir(allelements);

// * 2. Accessing and Changing values of properties of HTML Elements.
        // * 1. TagName : returns tag for element nodes, not work for queryselectorall
            let Mytagname = document.querySelectorAll("p");
            // let Mytagname = document.querySelectorAll("p");
            
        // * 2. InnerText - returen text content of itself and its childrens, its contains pure text only
            let innertextEx = document.querySelector(".child1");

            // * changing value using innertext
            // innertextEx.innerText= "Punitsahu";

        // * 3. InnerHTML - returns the plain text or HTML contents in the element, text content alongwith html content too. markup
            // let innerhtmlEx = document.querySelector(".child1");

            // * changing value using innerHTML
            // innerhtmlEx.innerHTML = "<div>Hello My Name Is Punit</div>";

        // * 4. TextContent - returns textual content even for hidden elements, used to change and access hidden elements.
            // let hidden = document.querySelector("h2");
            // hidden.textContent;
            // hidden.textContent = "I am not hidden";

        // ? Difference Between textcontent and innertext -
        // Inner Text - Returns the text as it appears to the user, excluding hidden elements and consider css styling too.
        // textcontent - Retrieves or sets the text content of an element including hidden elements and does not consider css.
        
// * 3. Accessing Children Nodes - 
    // * 1. Using Child Nodes - returns a live NodeList of all child nodes of a specified element, including elements, text nodes, and comments.
    let mybox = document.querySelector(".container");
    // console.dir(mybox.childNodes);
    
    // * 2. Children - returns a live HTMLCollection of only the child elements of a specified element (ignores text nodes and comments).
    // console.dir(mybox.children[0]);

    // * 3. First child
    // console.dir(mybox.firstChild);

    // * 4. Last child
    // console.dir(mybox.lastChild);

    // * . Elementchild - Returns elements only
    // console.log(mybox.ele);
    
    // * 5. FirstElementChild - Focus on Elements Only
    // console.dir(mybox.firstElementChild);

    // * 6. LastElementChild - 
    // console.dir(mybox.lastElementChild);

     // * 7. PreviousElementChild - 
    // let lastone = mybox.lastElementChild;
    // console.dir(lastone.previousElementSibling);
    
// * 4. Accessing Parent Nodes - 
    // * 1. Parent Node -  returns the parent node of the specified element. This property will return the parent as a node, which could be an element, document node, or even a document fragment.
        // console.dir(mybox.parentNode);
        
    // * 1. Parent Element - returns the parent element of the specified element. This property is similar to parentNode, but it only returns an element node. If the parent is not an element (e.g., if it's a document node), it will return null.
        // console.dir(mybox.parentElement);
        