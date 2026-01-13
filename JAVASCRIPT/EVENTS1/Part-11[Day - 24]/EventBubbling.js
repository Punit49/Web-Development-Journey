// ? Event bubbling is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements. When an event happens in a specific element (like a button), it first affects that element and then moves up to its parent elements, triggering any event listeners attached to those parents. 
// * This process is called “bubbling” because it starts at the bottom (the innermost element) and bubbles up to the top (the outer elements).

// ? How Event Bubbling Works -
// * Starting Point: When you interact with an element, such as clicking a button, the event starts with that element.
// * Propagation: The event then moves up through its parent elements in the DOM (Document Object Model) tree, triggering any event listeners that are set up for that event type.
// * Order of Execution: The innermost element’s event listener is executed first, followed by the outer elements in the order they appear in the DOM.  

// ? Event Capturing is also one of the Event Propagation phases. It is also known as Event Trickling. 
// * It is the opposite of the event bubbling phase, here it will go down through the ancestor to the target element. 
// * This downward propagation of the events is known as Event Capturing. 
// * You can enable Event Capturing by passing a third parameter as a true value to the addEventListener() method at the time of attaching an event using it.

// NOTE: By default, the third parameter of the addEventListener() is false which makes it bubble up to the ancestors in the DOM hierarchy

// * Example - 

    // document.querySelector("#Grand").addEventListener("click",  (e) => {
    //     console.log("Grandparent");
    // }, false);

    // document.querySelector("#Parent").addEventListener("click",  (e) => {
    //     console.log("Parent");
    // }, false);

    // document.querySelector("#child").addEventListener("click",  (e) => {
    //     e.stopPropagation();
    //     console.log("child");
    // }, false);

    let child = document.querySelector(".child");
    let parent = document.querySelector(".parent");
    let grandParent = document.querySelector(".grandParent");

    // window.addEventListener('click', () => {
    //     alert("Window's event handler executed");
    // });
    grandParent.addEventListener("click", (event) => {
        alert("Grandparent's event handler executed");
    });
    parent.addEventListener("click", (event) => {
        event.stopImmediatePropagation();
        alert("parent's event handler executed");
    }, true);
    child.addEventListener("click", (event) => {
        alert("child's event handler executed");
    });

// ? The preventDefault() method is used to prevent the browser from executing the default action of the selected element. It can prevent the user from processing the request by clicking the link.

// ? The stopPropagation() method is used to stop the propagation of event calling. That is a parent event is called we can stop the propagation of calling its children by using the stopPropagation() method and vice-versa.

// ? Event delegation is a JavaScript technique where a single event listener on a parent element handles events from its multiple child elements, leveraging the event bubbling process. Instead of adding separate listeners to each child, you attach one to the parent and use the event object's target property to identify which child triggered the event. This improves performance