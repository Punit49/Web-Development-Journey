// ? MutationObserver - It is a way to track changes in DOM elements, 

const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
            console.log("Changed text:", mutation.target.innerText);
        }
    });
});

const targetNode = document.querySelector(".mydiv");
observer.observe(targetNode, {
    childList: true,
    subtree: true,
});
