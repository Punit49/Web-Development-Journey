// ? Performance.now() - Method used to check performance of code. You can check the execution time of code..
// ? Reflow - It is the process of calculating the position and size of elements in the DOM. This happens when the browser needs to recalculate the layout or a part of the page, such as when an element's size, position, or content changes, It occurs when the layout of the webpage needs to be recalculated. 
// ? Repaint - Repaint is the process of drawing the pixels of the elements on the screen. It happens when the visual appearance of an element changes, but not its layout.

// ? Example - 
// * More Reflow and Repaint 
    let t1 = performance.now();

    for(let i = 1; i<=100; i++){
        let NewPara = document.createElement("p");
        NewPara.innerText = `Para A - ${i} `;
        document.body.appendChild(NewPara);
    }

    let t2 = performance.now();
    console.log("Performance of code 1 - " + (t2 - t1));

// * Less Reflow and Repaint - 
    let t3 = performance.now();
    let Div = document.createElement("div");

    for(let i = 1; i<=100; i++){
        let NewPara = document.createElement("p");
        NewPara.innerText = `Para B - ${i}`;
        Div.appendChild(NewPara);
    }
    document.body.appendChild(Div);

    let t4 = performance.now();
    console.log("Performance of code 2 - " + (t4 - t3));

// ? DocumentFragment - A DocumentFragment is a lightweight "virtual" DOM node that isn't part of the actual DOM tree. It acts as a temporary container to hold and manipulate multiple DOM nodes before inserting them into the actual DOM. There is only 1 reflow and repaint required when appending it to actual DOM.

// * Good Code - 
    let t5 = performance.now();
    
    let Fragment = document.createDocumentFragment();
    for(let i = 1; i<= 100; i++){
        let NewPara = document.createElement("p");
        NewPara.innerText = `Created Using DocumentFragment`;
        Fragment.appendChild(NewPara); // No reflow and repaint
    }
    document.body.appendChild(Fragment);
    
    let t6 = performance.now();
    console.log("Performance is - " + (t6 - t5));