let filterWorkBtns = document.querySelectorAll(".filterWork li")
    works = document.querySelectorAll('.works .content .card');

filterWorkBtns.forEach(element => {
    
    element.addEventListener('click', (e) => {
        e.target.classList.add('active');
        // delete class active from all buttons except current btn
        filterWorkBtns.forEach((el) => {
            if (el != element)
            {
                el.classList.remove("active");    
            }
        })

    })
    

    element.addEventListener("click", filterWork);
});

function filterWork() {
  works.forEach((card) => {
    card.style.display = "none";
  });
  document.querySelectorAll(this.dataset.category).forEach((e) => {
    e.style.display = "block";
  });
}


// function removeActive()
// {
//     filterWorkBtns.forEach(element => {
//         element.classList.remove("active");
//         this.classList.add("active");
//     })
// }

