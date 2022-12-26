var IconClosed = document.querySelector(".openCloseIcons .closed");
var HamburgerIcon = document.querySelector(".openCloseIcons .hamburger");
var Navigation = document.querySelector(".headerNav");

// here are the links for scrolling

var Links = document.querySelectorAll(".headerNav a");
console.log(Links);

var IconsArray = document.querySelectorAll(".menuIcon");
console.log(IconsArray);
for (var i = 0; i < IconsArray.length; i++) {
    IconsArray[i].addEventListener("click", changeIcon);
}

for (var j = 0; j < Links.length; j++) {
       
     Links[j].addEventListener("click",changeIcon);
}




function changeIcon() {
    if (HamburgerIcon.classList.contains("hidden")) {
        HamburgerIcon.classList.remove("hidden");
        IconClosed.classList.add("hidden");
        Navigation.classList.add("hidden");

    }
    else {
        HamburgerIcon.classList.add("hidden");
        IconClosed.classList.remove("hidden");

        Navigation.classList.remove("hidden");
    }


}