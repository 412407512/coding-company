let navbar = document.querySelector(".navbar"),
  MobileNav = document.querySelector(".header .NavMobile"),
  iconNavbar = document.getElementById("iconNavBar"),
  rootStyle = getComputedStyle(document.documentElement),
  primaryClr = rootStyle.getPropertyValue("--primary-color"),
  secondClr = rootStyle.getPropertyValue("--second-color"),
  selectMenu = document.querySelectorAll(".linkHeader"),
  OverLay = document.querySelector(".overlay_about"),
  btnClose = document.querySelector(".close_overlay");

window.onscroll = () => {
  navbar.classList.add("shadow");
  if (scrollY == 0) {
    navbar.classList.remove("shadow");
  }

  if (scrollY >= 580) {
    navbar.style = `background : ${primaryClr};`;
    MobileNav.style = `background: ${primaryClr};  backdrop-filter:blur(0)`;
  } else {
    navbar.style = `background : none`;
    MobileNav.style = `background : none`;
  }

  // get the father element and add showObserve class to him to be showing while scrolling
  document.querySelectorAll(".works .content .card .imageWork").forEach((e) => {
    if (e && e.classList.contains("expand")) {
      e.parentElement.classList.add("showObserve");
    }
  });
  highLightNavLinkBySections();
};
//  Nav bar
iconNavbar.addEventListener("click", () => {
  MobileNav.classList.toggle("show");
});

if (/Mobi/.test(navigator.userAgent)) {
  console.log("phone");
} else {
  console.log("desktop");
}

// redirect to services

selectMenu.forEach((e) => {
  e.addEventListener("change", () => {
    location.href = `/coding-company/index.html#services`;
  });
});

// Expand Images

let ImagesWork = document.querySelectorAll(".works .imageWork");

var IsExpandImg = false;
ImagesWork.forEach((el) => {
  el.addEventListener("click", () => {
    imgExpand(el);
  });
});

function imgExpand(el) {
  if (IsExpandImg) {
    el.classList.remove("expand");
    OverLay.style.display = "none";
  } else {
    el.classList.add("expand");
    OverLay.style.display = "block";
    // if the hand click is exists
    if (el.querySelector(".handClick")) {
      el.querySelector(".handClick").remove();
    }
  }
  IsExpandImg = !IsExpandImg;
}

let imgExpanded = document.querySelector(".works .imageWork.expand img");
btnClose &&
  btnClose.addEventListener("click", () => {
    OverLay.style.display = "none";
    imgExpanded && imgExpanded.classList.remove("expand");
  });
imgExpanded &&
  imgExpanded.addEventListener("click", () => {
    OverLay.style.display = "none";
    imgExpanded && imgExpanded.classList.remove("expand");
  });

function highLightNavLinkBySections() {
  let sections = document.querySelectorAll(".container > section");
  sections &&
    sections.forEach((section) => {
      const section_id = section.getAttribute("id");
      const navLink = navbar.querySelector(`a[href="#${section_id}"]`);
      if (
        section.getBoundingClientRect().top <= 0 &&
        section.getBoundingClientRect().bottom >= 0
      ) {
        navLink.style.color = `${secondClr}`;
      } else {
        navLink.style.color = ``;
      }
    });
}
document.addEventListener("DOMContentLoaded", () => {
  highLightNavLinkBySections();
});

// run video

let puse = document.querySelector(".puse"),
icon = puse.querySelector("i");

icon.addEventListener("click", () => {
  if (icon.classList.contains('fa-play'))
  {
    puse.previousElementSibling.play();
    icon.classList.replace('fa-play', 'fa-pause');
  }
  else if (icon.classList.contains('fa-pause'))
  {
    puse.previousElementSibling.pause();
    icon.classList.replace('fa-pause','fa-play') ;
  }
});

