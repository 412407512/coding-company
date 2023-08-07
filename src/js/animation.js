let observe = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
        {
            entry.target.classList.add('showObserve')
        } else {
            entry.target.classList.remove("showObserve");
        }
    });
});


let hiddenObserve = document.querySelectorAll(".hiddenObserve"),
    hiddenVertical = document.querySelectorAll(".hiddenVertical")
    items = [hiddenObserve, hiddenVertical];
    
    items.forEach(elements => {
    elements.forEach(el => {
        observe.observe(el);
    });
});


// Make effect at all cards
let cardServices = document.querySelectorAll(".services .content .card"),
    cardWorks = document.querySelectorAll(".works .content .card"),
    cardTeam = document.querySelectorAll(".team .content .card")
    cards=[cardServices,cardTeam,cardWorks]
    ;
    
cards.forEach(elements => {
    elements.forEach(element => {
        element.classList.add("hiddenCards");
    });
    elements.forEach((e) => observe.observe(e));
});

