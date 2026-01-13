// ? DOM MANIPULATION

// ? 1. Getting And setting attributes 
    // * 1. getAttribute(attr) used to get the attribute value
        let div = document.querySelector("#cont");
        // let classes =  div.getAttribute("class");
        // console.log(classes);
        // console.log(div.getAttribute("name"));
        
    // * 2. setAttribute( attr, value ) used to set the attribute value.
        // div.setAttribute("class", "Boxer");
        // div.setAttribute("id", "ContainerHu");
        // console.log(div.getAttribute("class"));
        // console.log(div.getAttribute("id"));

// ? 2. Altering Style 
    // * elemnt.style - to get styling details of a element.
    
    // * 1. style - all styles applied using js is inline style.
        // div.style.backgroundColor = "blue";
        // div.style.fontSize = "40px";

// ? 3. Creating Elements -
    let NewElement = document.createElement("p");
    NewElement.innerText = "My name is punit sahu";
    // console.log(NewElement);

// ? 4. Inserting Elements Methods - 
    let Mydiv = document.querySelector("div");

    // * 1. Append - node-append( element ) adds at the end of node (inside).
    // Mydiv.append(NewElement);

    // * 2. prepend - node-prepend( element ) adds at the start of node (inside).
    // Mydiv.prepend(NewElement);

    // * 3. Before - node.before( element ) adds before node (outside).
    // Mydiv.before(NewElement);

    // * 4. After - node.after( element ) adds after node (outside).
    // Mydiv.after(NewElement);

    // * 5. Appendchild - used to add a node to the end of the list of children of a specified parent node.
    // let mycont = document.createElement("h4");
    // let textnode = document.createTextNode("This is new heading");
    // mycont.appendChild(textnode);    
    // Mydiv.appendChild(mycont);

    // * 6 Remove child - used to remove a specified child node of the given element. It returns the removed node as a node object or null if the node doesn’t exist.
    // let var3 = document.querySelector(".box");
    // let var4 = Mydiv.removeChild(var3);


// ? 5. Delete Node -
    // let boxes = document.querySelector(".box3");
    // boxes.remove();

 // ? 6. Classlist - way to access and manipulate the classes assigned to an HTML element. It provides a DOMTokenList object, which is essentially a collection of the element's class names.
        // Mydiv.classList.add("mycontent");
        // Mydiv.classList.remove("container");
        // Mydiv.classList.toggle("Meradabba");
        // console.log(Mydiv.classList.contains("Meradabba"));
        // let var5 = Mydiv.classList.item(1);
        // console.log(var5);
        // let var2 = Mydiv.classList.length;  
        // console.log(var2);
    