const sections = document.querySelectorAll("section");
const menu = document.querySelector(".navbar__menu");
const scrollBtn = document.querySelector("#btn");

let clock = null;

// build the nav

sections.forEach((section)=>{
    const link = document.createElement("a");
    const linkList = document.getElementById("navbar__list");
    const newLinkItem = document.createElement("li");
    
    link.textContent = section.getAttribute("data-nav");
    link.setAttribute("data-link", section.getAttribute("id"));
    
    newLinkItem.append(link);
    linkList.appendChild(newLinkItem);
    
    link.classList = "nav-link";
    newLinkItem.classList.add("nav-item", section.getAttribute("id"));
})

// Add class "active" to section when near top of viewport

const isVisible = function(section){
    let rect = section.getBoundingClientRect();
    return(
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.section.clientHeight) &&
        rect.right <= (window.innerWidth || document.section.clientWidth));
    };
    let addActive = document.querySelectorAll("section");
    window.addEventListener("scroll", function(){
    addActive.forEach(section=>{
        if (isVisible(section)){
            section.classList.add("active");
        } else{
            section.classList.remove("active");
        }
    })
})


//Active state for nav

window.addEventListener("scroll", ()=>{
    let current = "";
    sections.forEach(section=>{
        let sectionStart = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionStart - sectionHeight / 2)){
            current = section.getAttribute("id");
        }
    })
    let navItemActive = document.querySelectorAll("li");
    navItemActive.forEach(li=>{
        li.classList.remove("active");
        if(li.classList.contains(current)){
            li.classList.add("active")
        }   
    })
})
   
   
//Scroll Onclick function
const links = document.querySelectorAll(".nav-link");
links.forEach((item)=>{
    item.addEventListener("click",() => {
            let link = document.getElementById(item.getAttribute("data-link")); 
            link.scrollIntoView({behavior: "smooth"});
    })
})

// Hide navbar

function hideNav(){
    document.querySelector(".navbar__menu").style.visibility="hidden";
}

window.addEventListener("scroll", function() {
    if (clock !== null) {
        clearTimeout(clock);
        menu.style.visibility = "visible";
    }
clock = setTimeout(hideNav, 10000);
});

window.addEventListener("click", function() {
    if (clock !== null) {
        clearTimeout(clock);
        menu.style.visibility ="visible";
    }
clock = setTimeout(hideNav, 10000);
});

//Scroll to Top button

function displayScroll() {
    const scrollTotal = window.innerHeight / 4;
    if (window.scrollY > scrollTotal) {
        scrollBtn.style.display = "inline";
        } 
        else {
          scrollBtn.style.display = "none";
    }
}  
  
    function scrollToTop() {
        window.scrollTo({
            top: 0, behavior: "smooth"
        })
    }
  
scrollBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", displayScroll);

