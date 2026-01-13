// ? Events - are actions or occurrences that happen in the browser, which the browser can recognize and respond to. 

let Mydiv = document.querySelector(".container");
let MyNode = document.querySelectorAll(".MeraButton");
let num = 4;

// ? In function() this refers to the object/element which triggered that event, But in arrow functions, this does not refer to the element that triggered the event.
    const thisBtn = document.querySelector(".thisBtn");
    const all = document.querySelectorAll("*");

    // thisBtn.addEventListener('click', function() {
    //     console.log(this.innerText);
    // });
    
    // * Universal selector eventlistener
    // all.forEach((Element) => {
    //     Element.addEventListener("click", function(e){
    //         console.log("This is - ", this);
    //         this.style.backgroundColor = 'red';
    //         e.stopPropagation();
    //     });
    // })

// ? Ways To apply Events - 
    // * 1. Inline Event Handlers: Directly in the HTML:
        // <button onclick="alert('Button clicked!')">Click me</button>

    // * 2. Using DOM Properties: Assigning event handlers in JavaScript:
        // MyNode[0].onclick = () => {
        //     let newEle = document.createElement("div");
        //     newEle.innerText = `Box ${num}`;
        //     newEle.classList.add("box");
        //     Mydiv.append(newEle);
        //     num++;
        // }

    // * 3. Using addEventListener: is used to attach an event handler to an element, And we needed them coz in DOM events we can't execute 2 functions on same element so it came in picture.
        // * 1. callback inside event listner
        // MyNode[0].addEventListener("click", () => {
        //     console.log("Hello Guys!");
        // });

        // * 2. callback outside event listner
        const myfunction = () => {
            console.log("I am Callback function");
        }
        MyNode[0].addEventListener("click", myfunction);

// ? Remove Event Listener - To remove a event listener creates its callback function oustide the event listener for proper reference.
    // MyNode[0].removeEventListener("click", myfunction);

// * NOTE - When script is written at last of body tag, then events specified in js file will work. 

// ? Event Object - It is a special object that has details about the event, it is automatically passed to event handlers when an event occurs. 
// ? It contains information about the event, such as the type of event, the element that triggered it, and additional details specific to that event type.
    MyNode[0].onclick = (Event) => {
        console.log(Event);
        console.log(Event.type);
        console.log(Event.clientX);
        console.log(Event.clientY);
    }

// ? Some Types of Events - 
    const MouseFunction = () => {
        Mydiv.style.backgroundColor = "green";
    }

// ? Mouse Events - 
    // * 1. mouseout - Fired when the mouse pointer leaves an element.
        Mydiv.addEventListener("mouseout", () => {
            Mydiv.style.backgroundColor = "hotpink";
        });

    // * 2. mousedown - Fired when a mouse button is pressed down on an element.
        // Mydiv.addEventListener("mousedown", MouseFunction);

    // * 3. mouseup - Fired when a mouse button is released over an element.
        // Mydiv.addEventListener("mouseup", MouseFunction);

    // * 4. mousemove - Fired when the mouse pointer is moved within an element.
        // Mydiv.addEventListener("mouseover", MouseFunction);

    // * 5. mouseover - Fired when the mouse pointer enters an element.
        // Mydiv.addEventListener("mouseover", MouseFunction);

    // * 6. Mouse-wheel - Fired when the mouse wheel is scrolled over an element. This event provides information about the amount and direction of the scroll.
        Mydiv.addEventListener("wheel", () => {
            console.log("Wheeled");
        });

// ? Keyboard Events - 
    // code = Name of the key pressed on keyboard [L]
    // Key = value of that key [l]

    // * 1. onkeyUp - press krke chordne k baad active hoga.
        window.addEventListener("keyup", (Event) => {
            console.log(Event);
            console.log("Key: ", Event.key);
            console.log("Code:" , Event.code);
        });
    // * 2. onkeyDown - press karte hi activate ho jayega.
        window.addEventListener("keydown", (Event) => {
            console.log(Event);
            console.log("Key: ", Event.key);
            console.log("Code:" , Event.code);
        });
    // * 3. onkeyPress - similar to keydown, it doesn't support some of keys ALT, CTRL, SHIFT, ESC. and it is depreciated.
        window.addEventListener("keypress", (Event) => {
            console.log(Event);
            console.log("Key: ", Event.key);
            console.log("Code:" , Event.code);
        });

// ? Input Events - 
    // * 1. input -
    let Input = document.getElementById("MyInput");
    let para = document.getElementById("Inputpara");

    Input.addEventListener("input", () => {
        para.innerText = `Current Value - ${Input.value}`;
        console.log(Input.value);
    });

    // * 2. textarea -
    const textarea = document.getElementById("textspace");
    const paragraph = document.getElementById("Mypara");
    
    // textarea.addEventListener("input", () => {
    //     paragraph.textContent = `Current Content: ${textarea.value}`;
    // });

    // * 3. Select Dropdown -  returns the currently selected option's value:
    // const selection = document.getElementById("selector");

    // selection.addEventListener("input", () => {
    //     paragraph.textContent = `Current Option : ${selection.value}`;
    // });


// ? Other Events - 
        // * 1. Onload 
        // window.addEventListener("load", (Event) => {
        //     alert("Page Loaded with load!");
        // });

        // window.onload = () => {
        //     alert("Page Loaded with onload!");
        // }

    // * 2. DOMContentLoaded - The DOMContentLoaded event fires when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. This is different from onload, which waits for all resources.
        // window.addEventListener("DOMContentLoaded", () => {
        //     alert("Page Loaded with DOMContentLoaded!");
        // });


// const parent  = document.querySelector(".parentBtn");
// parent.addEventListener("click", (e) => {
//     console.dir(e.target);
// })