const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");

// For Hamburger
const toggleBars = () => {
    const navContent = document.querySelector(".nav-Content");
    const Header = document.querySelector("header");

    if(window.innerWidth <= 1000){
        hamburger.classList.remove("makeNone");
        navContent.classList.add("makeNone");
        sidebar.classList.remove("makeNone");
        sidebar.innerWidth = "80%";
    }
    else {
        hamburger.classList.add("makeNone");
        navContent.classList.remove("makeNone");
        sidebar.classList.add("makeNone");
    }
}

toggleBars();
window.addEventListener("resize", toggleBars);

// For Sidebar
const sideCheckBox = document.querySelector(".sideCheckBox");
hamburger.addEventListener("click", () => {
    if(sideCheckBox.checked){
        sidebar.style.right = "-80px";
    }    
    else{
        sidebar.style.right = "-1000px";
    }
});

// Typing animation
const typed1 = new Typed("#first-auto-type", {
    strings: ["Start with"],
    typeSpeed: 60,
    backSpeed: 0,
    showCursor: false, 
    onComplete: () => {
        setTimeout(() => {
            typed2.start();
        }, 1000);
    }
});

const typed2 = new Typed("#second-auto-type", {
    strings: ["Web Development", "Cybersecurity", "Artificial Intelligence", "App Development", "Web Design", "Machine Learning", "Data Science"],
    typeSpeed: 140,
    backSpeed: 90,
    loop: true, 
    smartBackspace: true,
    showCursor: true, 
    startDelay: 1100
});